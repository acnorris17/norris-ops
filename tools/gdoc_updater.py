#!/usr/bin/env python3
"""
Google Docs updater for NorrisPalace bridge.
Creates or updates a Google Doc with palace export content.
Stores doc URL in palace-claude-bridge-url.txt.

Usage:
  python3 gdoc_updater.py <content_file>
  python3 gdoc_updater.py --auth   # First-time OAuth flow
"""

import json
import os
import sys
from pathlib import Path

AGENT_DIR = Path(__file__).resolve().parent.parent
CREDS_FILE = AGENT_DIR / "google_credentials.json"
TOKEN_FILE = AGENT_DIR / "google_token.json"
URL_FILE = AGENT_DIR / "palace-claude-bridge-url.txt"
DOC_ID_FILE = AGENT_DIR / "palace-claude-doc-id.txt"
DOC_TITLE = "NorrisPalace \u2014 Daily Context Export for Claude.ai"

SCOPES = ["https://www.googleapis.com/auth/documents", "https://www.googleapis.com/auth/drive.file"]


def get_credentials():
    from google.oauth2.credentials import Credentials
    from google.auth.transport.requests import Request
    from google_auth_oauthlib.flow import InstalledAppFlow

    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return creds


def get_or_create_doc(service):
    """Get existing doc ID or create new doc."""
    if DOC_ID_FILE.exists():
        doc_id = DOC_ID_FILE.read_text().strip()
        if doc_id:
            try:
                service.documents().get(documentId=doc_id).execute()
                return doc_id
            except Exception:
                pass  # Doc deleted or inaccessible, create new

    # Create new doc
    body = {"title": DOC_TITLE}
    doc = service.documents().create(body=body).execute()
    doc_id = doc["documentId"]
    DOC_ID_FILE.write_text(doc_id)
    url = f"https://docs.google.com/document/d/{doc_id}/edit"
    URL_FILE.write_text(url)
    return doc_id


def clear_doc(service, doc_id):
    """Clear all content from the doc."""
    doc = service.documents().get(documentId=doc_id).execute()
    content = doc.get("body", {}).get("content", [])
    if len(content) <= 1:
        return
    end_index = content[-1].get("endIndex", 1)
    if end_index <= 2:
        return
    requests = [{"deleteContentRange": {"range": {"startIndex": 1, "endIndex": end_index - 1}}}]
    service.documents().batchUpdate(documentId=doc_id, body={"requests": requests}).execute()


def insert_text(service, doc_id, text):
    """Insert text at the beginning of the doc."""
    requests = [{"insertText": {"location": {"index": 1}, "text": text}}]
    service.documents().batchUpdate(documentId=doc_id, body={"requests": requests}).execute()


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 gdoc_updater.py <content_file> | --auth")
        sys.exit(1)

    if sys.argv[1] == "--auth":
        print("Starting OAuth flow...")
        creds = get_credentials()
        print(f"Authenticated. Token saved to {TOKEN_FILE}")
        return

    content_file = Path(sys.argv[1])
    if not content_file.exists():
        print(f"Error: File not found: {content_file}")
        sys.exit(1)

    content = content_file.read_text()
    if not content.strip():
        print("Error: Content file is empty")
        sys.exit(1)

    creds = get_credentials()

    from googleapiclient.discovery import build
    service = build("docs", "v1", credentials=creds)

    doc_id = get_or_create_doc(service)
    clear_doc(service, doc_id)
    insert_text(service, doc_id, content)

    url = f"https://docs.google.com/document/d/{doc_id}/edit"
    URL_FILE.write_text(url)
    print(f"DOC_URL={url}")
    print(f"Updated: {DOC_TITLE}")


if __name__ == "__main__":
    main()
