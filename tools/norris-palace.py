#!/usr/bin/env python3
"""
NorrisPalace — Norris Utilities Persistent Memory System v1.0.0
Local JSON-based memory organized by wings (categories).
CLI interface for store, query, list, get, update, tag, export, seed, stats, context-brief.
"""

import argparse
import json
import os
import re
import sys
import uuid
from datetime import datetime, timezone
from difflib import SequenceMatcher
from pathlib import Path

PALACE_DIR = Path.home() / "norris-agent" / "palace"
INDEX_FILE = PALACE_DIR / "index.json"
VALID_WINGS = ["customers", "deals", "products", "rules", "conversations", "cb_tasks", "bss", "family"]


def load_index():
    """Load the master index file."""
    if not INDEX_FILE.exists():
        return {"version": "1.0.0", "name": "NorrisPalace", "created": now_iso(), "wings": VALID_WINGS, "records": []}
    with open(INDEX_FILE, "r") as f:
        return json.load(f)


def save_index(index):
    """Save the master index file."""
    with open(INDEX_FILE, "w") as f:
        json.dump(index, f, indent=2)


def now_iso():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def make_room(text):
    """Generate a room name from text — lowercase, underscored, short."""
    clean = re.sub(r'[^a-z0-9\s]', '', text.lower())
    words = clean.split()[:4]
    return "_".join(words) if words else "general"


def record_path(wing, record_id):
    return PALACE_DIR / wing / f"{record_id}.json"


def save_record(record):
    """Save a record to its wing directory and update the index."""
    wing = record["wing"]
    rid = record["id"]
    wing_dir = PALACE_DIR / wing
    wing_dir.mkdir(parents=True, exist_ok=True)
    with open(record_path(wing, rid), "w") as f:
        json.dump(record, f, indent=2)
    # Update index
    index = load_index()
    # Remove old entry if exists
    index["records"] = [r for r in index["records"] if r["id"] != rid]
    index["records"].append({
        "id": rid,
        "wing": wing,
        "room": record["room"],
        "summary": record["summary"],
        "tags": record["tags"],
        "updated": record["updated"]
    })
    save_index(index)


def load_record(wing, record_id):
    """Load a full record from disk."""
    path = record_path(wing, record_id)
    if not path.exists():
        return None
    with open(path, "r") as f:
        return json.load(f)


def find_record_by_id(record_id):
    """Find a record by ID across all wings."""
    index = load_index()
    for entry in index["records"]:
        if entry["id"] == record_id or entry["id"].startswith(record_id):
            return load_record(entry["wing"], entry["id"])
    return None


def fuzzy_score(query, text):
    """Simple fuzzy matching score between query and text."""
    if not text:
        return 0.0
    query_lower = query.lower()
    text_lower = text.lower()
    # Exact substring match gets highest score
    if query_lower in text_lower:
        return 1.0
    # Check individual query words
    words = query_lower.split()
    word_matches = sum(1 for w in words if w in text_lower)
    word_score = word_matches / len(words) if words else 0
    # Sequence matcher for partial matches
    seq_score = SequenceMatcher(None, query_lower, text_lower).ratio()
    return max(word_score * 0.8, seq_score * 0.5)


def recency_score(updated_str):
    """Score based on how recent the record is (0-1, 1 = today)."""
    try:
        updated = datetime.fromisoformat(updated_str.replace("Z", "+00:00"))
        now = datetime.now(timezone.utc)
        days_old = (now - updated).days
        if days_old <= 0:
            return 1.0
        elif days_old <= 7:
            return 0.8
        elif days_old <= 30:
            return 0.5
        elif days_old <= 90:
            return 0.3
        else:
            return 0.1
    except Exception:
        return 0.1


# ─── COMMANDS ───────────────────────────────────────────────

def cmd_store(args):
    """Store a new record."""
    wing = args.wing
    if wing not in VALID_WINGS:
        print(f"Error: Invalid wing '{wing}'. Valid: {', '.join(VALID_WINGS)}")
        sys.exit(1)

    text = args.text
    tags = [t.strip() for t in args.tags.split(",")] if args.tags else []
    source = args.source or "manual"
    room = args.room or make_room(text)
    summary = args.summary or (text[:100] + "..." if len(text) > 100 else text)

    record = {
        "id": str(uuid.uuid4()),
        "wing": wing,
        "room": room,
        "created": now_iso(),
        "updated": now_iso(),
        "tags": tags,
        "verbatim": text,
        "summary": summary,
        "source": source,
        "metadata": {}
    }

    save_record(record)
    print(f"Stored: {record['id'][:8]}... in {wing}/{room}")
    print(f"  Summary: {summary}")
    return record


def cmd_query(args):
    """Search records by fuzzy match on verbatim/summary + exact match on tags."""
    query = args.query
    top_n = args.top or 5
    wing_filter = args.wing

    index = load_index()
    results = []

    for entry in index["records"]:
        if wing_filter and entry["wing"] != wing_filter:
            continue

        # Score from index fields first
        summary_score = fuzzy_score(query, entry.get("summary", ""))
        tag_score = 1.0 if any(query.lower() in t.lower() for t in entry.get("tags", [])) else 0.0

        # Load full record for verbatim search
        full = load_record(entry["wing"], entry["id"])
        verbatim_score = fuzzy_score(query, full.get("verbatim", "")) if full else 0.0

        # Combined score: weighted text match + recency bonus
        text_score = max(summary_score, verbatim_score, tag_score)
        recency = recency_score(entry.get("updated", ""))
        combined = (text_score * 0.7) + (recency * 0.3)

        if combined > 0.15:
            results.append({
                "id": entry["id"],
                "wing": entry["wing"],
                "room": entry.get("room", ""),
                "summary": entry.get("summary", ""),
                "tags": entry.get("tags", []),
                "verbatim": full.get("verbatim", "")[:200] if full else "",
                "score": round(combined, 3),
                "updated": entry.get("updated", "")
            })

    results.sort(key=lambda x: x["score"], reverse=True)
    results = results[:top_n]

    if not results:
        print(f"No results for: {query}")
        return

    print(f"Top {len(results)} results for: \"{query}\"\n")
    for i, r in enumerate(results, 1):
        print(f"  {i}. [{r['wing']}/{r['room']}] (score: {r['score']})")
        print(f"     {r['summary']}")
        if r['tags']:
            print(f"     Tags: {', '.join(r['tags'])}")
        if r['verbatim']:
            print(f"     \"{r['verbatim'][:150]}{'...' if len(r['verbatim']) >= 150 else ''}\"")
        print(f"     ID: {r['id'][:12]}...  Updated: {r['updated']}")
        print()


def cmd_list(args):
    """List all records in a wing."""
    wing = args.wing
    if wing not in VALID_WINGS:
        print(f"Error: Invalid wing '{wing}'. Valid: {', '.join(VALID_WINGS)}")
        sys.exit(1)

    index = load_index()
    records = [r for r in index["records"] if r["wing"] == wing]
    records.sort(key=lambda x: x.get("updated", ""), reverse=True)

    if not records:
        print(f"No records in wing: {wing}")
        return

    print(f"Wing: {wing} ({len(records)} records)\n")
    for r in records:
        tags_str = f" [{', '.join(r['tags'])}]" if r.get('tags') else ""
        print(f"  {r['id'][:12]}... | {r.get('room', 'unknown'):20s} | {r['summary'][:60]}{tags_str}")
    print()


def cmd_get(args):
    """Get a full record by ID."""
    record = find_record_by_id(args.id)
    if not record:
        print(f"Record not found: {args.id}")
        sys.exit(1)
    print(json.dumps(record, indent=2))


def cmd_update(args):
    """Update a record's text."""
    record = find_record_by_id(args.id)
    if not record:
        print(f"Record not found: {args.id}")
        sys.exit(1)

    if args.text:
        record["verbatim"] = args.text
        record["summary"] = args.text[:100] + "..." if len(args.text) > 100 else args.text
    if args.summary:
        record["summary"] = args.summary
    record["updated"] = now_iso()
    save_record(record)
    print(f"Updated: {record['id'][:12]}... in {record['wing']}/{record['room']}")


def cmd_tag(args):
    """Add or remove tags from a record."""
    record = find_record_by_id(args.id)
    if not record:
        print(f"Record not found: {args.id}")
        sys.exit(1)

    if args.add:
        new_tags = [t.strip() for t in args.add.split(",")]
        for t in new_tags:
            if t not in record["tags"]:
                record["tags"].append(t)
    if args.remove:
        rm_tags = [t.strip() for t in args.remove.split(",")]
        record["tags"] = [t for t in record["tags"] if t not in rm_tags]

    record["updated"] = now_iso()
    save_record(record)
    print(f"Tags updated: {record['id'][:12]}... → {record['tags']}")


def cmd_export(args):
    """Export records as readable markdown."""
    wing_filter = args.wing
    index = load_index()

    if wing_filter == "all":
        wings_to_export = VALID_WINGS
    elif wing_filter in VALID_WINGS:
        wings_to_export = [wing_filter]
    else:
        print(f"Error: Invalid wing '{wing_filter}'. Use a wing name or 'all'.")
        sys.exit(1)

    lines = []
    lines.append(f"# NorrisPalace Export — {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append(f"Wings: {', '.join(wings_to_export)}\n")

    total = 0
    for wing in wings_to_export:
        records = [r for r in index["records"] if r["wing"] == wing]
        if not records:
            continue
        records.sort(key=lambda x: x.get("updated", ""), reverse=True)
        lines.append(f"\n## {wing.upper()} ({len(records)} records)\n")
        for entry in records:
            full = load_record(wing, entry["id"])
            if not full:
                continue
            total += 1
            lines.append(f"### {full.get('room', 'unknown')} — {full['summary']}")
            lines.append(f"- ID: {full['id'][:12]}...")
            lines.append(f"- Created: {full['created']} | Updated: {full['updated']}")
            lines.append(f"- Source: {full.get('source', 'unknown')}")
            if full.get("tags"):
                lines.append(f"- Tags: {', '.join(full['tags'])}")
            lines.append(f"- Verbatim: {full['verbatim']}")
            lines.append("")

    lines.append(f"\n---\nTotal records exported: {total}")
    output = "\n".join(lines)
    print(output)


def cmd_seed(args):
    """Seed records from a file into a wing."""
    filepath = Path(args.file).expanduser()
    wing = args.wing

    if wing not in VALID_WINGS:
        print(f"Error: Invalid wing '{wing}'. Valid: {', '.join(VALID_WINGS)}")
        sys.exit(1)

    if not filepath.exists():
        print(f"Error: File not found: {filepath}")
        sys.exit(1)

    ext = filepath.suffix.lower()
    count = 0

    if ext == ".md":
        count = seed_markdown(filepath, wing)
    elif ext == ".json":
        count = seed_json(filepath, wing)
    elif ext == ".jsonl":
        count = seed_jsonl(filepath, wing)
    else:
        print(f"Error: Unsupported file type: {ext}")
        sys.exit(1)

    print(f"Seeded {count} records into wing: {wing}")


def seed_markdown(filepath, wing):
    """Parse a markdown file into records by section."""
    with open(filepath, "r") as f:
        content = f.read()

    # Split on ## headers
    sections = re.split(r'\n## ', content)
    count = 0

    for section in sections:
        section = section.strip()
        if not section or len(section) < 20:
            continue

        # Extract title from first line
        lines = section.split("\n")
        title = lines[0].strip().lstrip("#").strip()
        body = "\n".join(lines[1:]).strip()

        if not body or len(body) < 10:
            continue

        # Determine tags from content
        tags = []
        if wing == "rules":
            tags.append("always-check")
            if any(kw in title.lower() for kw in ["permanent", "mandatory", "hard rules", "guardrails"]):
                tags.append("permanent")
            if any(kw in title.lower() for kw in ["brand", "pricing", "email"]):
                tags.append(title.lower().split()[0])

        room = make_room(title)
        summary = title[:100]

        record = {
            "id": str(uuid.uuid4()),
            "wing": wing,
            "room": room,
            "created": now_iso(),
            "updated": now_iso(),
            "tags": tags,
            "verbatim": body[:2000],
            "summary": summary,
            "source": "legacy",
            "metadata": {"source_file": str(filepath)}
        }
        save_record(record)
        count += 1

    return count


def seed_json(filepath, wing):
    """Parse a JSON file into records."""
    with open(filepath, "r") as f:
        data = json.load(f)

    count = 0

    # Handle remarkable_customer_items.json format
    if isinstance(data, dict) and "items" in data:
        items = data["items"]
    elif isinstance(data, list):
        items = data
    else:
        items = [data]

    for item in items:
        text = item.get("text") or item.get("raw") or item.get("verbatim") or json.dumps(item)
        customer = item.get("customer", "")
        room = make_room(customer) if customer else make_room(text)

        tags = []
        if item.get("priority") == "high":
            tags.append("high-priority")
        if item.get("status") == "open":
            tags.append("open")
        if item.get("completed") is False:
            tags.append("active")
        if customer:
            tags.append(make_room(customer))

        summary = text[:100] if text else "No summary"

        record = {
            "id": str(uuid.uuid4()),
            "wing": wing,
            "room": room,
            "created": now_iso(),
            "updated": now_iso(),
            "tags": tags,
            "verbatim": text,
            "summary": summary,
            "source": "legacy",
            "metadata": {
                "source_file": str(filepath),
                "notebook": item.get("notebook", ""),
                "page": item.get("page", ""),
                "scanned_at": item.get("scanned_at", ""),
                "assigned_to": item.get("assigned_to", "")
            }
        }
        save_record(record)
        count += 1

    return count


def seed_jsonl(filepath, wing):
    """Parse a JSONL session log (OpenClaw format) into conversation records."""
    count = 0
    with open(filepath, "r") as f:
        lines = f.readlines()

    # Extract user messages and assistant responses from OpenClaw session format
    messages = []
    session_timestamp = now_iso()

    for line in lines:
        line = line.strip()
        if not line:
            continue
        try:
            entry = json.loads(line)
        except json.JSONDecodeError:
            continue

        # OpenClaw format: type=session has metadata, type=message has message.role/content
        if entry.get("type") == "session":
            session_timestamp = entry.get("timestamp", now_iso())
            continue

        if entry.get("type") != "message":
            continue

        msg = entry.get("message", {})
        role = msg.get("role", "")
        content = ""

        raw_content = msg.get("content", "")
        if isinstance(raw_content, str):
            content = raw_content
        elif isinstance(raw_content, list):
            text_parts = [p.get("text", "") for p in raw_content if isinstance(p, dict) and p.get("type") == "text"]
            content = " ".join(text_parts)

        timestamp = entry.get("timestamp", session_timestamp)

        if role in ("user", "assistant") and content and len(content) > 20:
            messages.append({"role": role, "content": content[:500], "timestamp": timestamp})

    # Group into conversation chunks (every 10 messages)
    chunk_size = 10
    for i in range(0, len(messages), chunk_size):
        chunk = messages[i:i + chunk_size]
        if not chunk:
            continue

        user_msgs = [m["content"] for m in chunk if m["role"] == "user"]
        combined = "\n---\n".join(user_msgs[:3])  # First 3 user messages as summary
        if not combined:
            continue

        # Extract topic words for summary
        words = combined[:200].replace("\n", " ")
        summary = f"Conversation: {words[:100]}"

        tags = ["conversation"]
        timestamp = chunk[0].get("timestamp", now_iso())

        record = {
            "id": str(uuid.uuid4()),
            "wing": wing,
            "room": f"session_{Path(filepath).stem[:8]}_{i}",
            "created": timestamp if isinstance(timestamp, str) else now_iso(),
            "updated": timestamp if isinstance(timestamp, str) else now_iso(),
            "tags": tags,
            "verbatim": combined[:2000],
            "summary": summary,
            "source": "legacy",
            "metadata": {"source_file": str(filepath), "message_count": len(chunk)}
        }
        save_record(record)
        count += 1

    return count


def cmd_stats(args):
    """Show counts by wing, total records, last updated."""
    index = load_index()
    records = index["records"]

    print(f"NorrisPalace v{index.get('version', '?')} — Stats\n")
    print(f"  Total records: {len(records)}")

    if records:
        dates = [r.get("updated", "") for r in records if r.get("updated")]
        if dates:
            print(f"  Last updated:  {max(dates)}")

    print(f"\n  Records by wing:")
    for wing in VALID_WINGS:
        count = sum(1 for r in records if r["wing"] == wing)
        bar = "█" * min(count, 40)
        print(f"    {wing:15s} {count:4d}  {bar}")

    # Tag stats
    all_tags = {}
    for r in records:
        for t in r.get("tags", []):
            all_tags[t] = all_tags.get(t, 0) + 1
    if all_tags:
        top_tags = sorted(all_tags.items(), key=lambda x: x[1], reverse=True)[:10]
        print(f"\n  Top tags:")
        for tag, cnt in top_tags:
            print(f"    {tag:25s} {cnt}")
    print()


def cmd_context_brief(args):
    """Generate a 10-line context brief for session start."""
    index = load_index()
    records = index["records"]

    print("=" * 50)
    print("  NORRISPALACE — SESSION CONTEXT BRIEF")
    print("=" * 50)

    # Last 3 conversations
    convos = [r for r in records if r["wing"] == "conversations"]
    convos.sort(key=lambda x: x.get("updated", ""), reverse=True)
    if convos:
        print("\n  Recent conversations:")
        for c in convos[:3]:
            print(f"    • {c.get('updated', '?')[:10]} — {c['summary'][:60]}")
    else:
        print("\n  No recent conversations logged.")

    # Urgent / follow-up items
    urgent = [r for r in records if any(t in r.get("tags", []) for t in ["urgent", "follow-up", "high-priority"])]
    if urgent:
        print(f"\n  Urgent/follow-up items ({len(urgent)}):")
        for u in urgent[:5]:
            print(f"    ⚠️  [{u['wing']}] {u['summary'][:60]}")
    else:
        print("\n  No urgent items.")

    # Active deals count
    deals = [r for r in records if r["wing"] == "deals"]
    print(f"\n  Active deals: {len(deals)}")

    # Rules tagged always-check
    rules = [r for r in records if r["wing"] == "rules" and "always-check" in r.get("tags", [])]
    if rules:
        print(f"\n  Rules (always-check): {len(rules)}")
        for rule in rules[:3]:
            print(f"    📌 {rule['summary'][:60]}")

    total = len(records)
    print(f"\n  Palace total: {total} records across {len(VALID_WINGS)} wings")
    print("=" * 50)


# ─── MAIN ───────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        prog="norris-palace",
        description="NorrisPalace — Norris Utilities Persistent Memory System"
    )
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # store
    p_store = subparsers.add_parser("store", help="Store a new record")
    p_store.add_argument("--wing", required=True, help="Wing (category)")
    p_store.add_argument("--room", help="Room name (auto-generated if omitted)")
    p_store.add_argument("--text", required=True, help="Verbatim text to store")
    p_store.add_argument("--tags", help="Comma-separated tags")
    p_store.add_argument("--source", help="Source: telegram|claude|legacy|manual")
    p_store.add_argument("--summary", help="One-line summary (auto-generated if omitted)")

    # query
    p_query = subparsers.add_parser("query", help="Search records")
    p_query.add_argument("query", help="Search text")
    p_query.add_argument("--top", type=int, default=5, help="Number of results")
    p_query.add_argument("--wing", help="Filter by wing")

    # list
    p_list = subparsers.add_parser("list", help="List records in a wing")
    p_list.add_argument("--wing", required=True, help="Wing to list")

    # get
    p_get = subparsers.add_parser("get", help="Get a full record by ID")
    p_get.add_argument("id", help="Record ID (or prefix)")

    # update
    p_update = subparsers.add_parser("update", help="Update a record")
    p_update.add_argument("id", help="Record ID (or prefix)")
    p_update.add_argument("--text", help="New verbatim text")
    p_update.add_argument("--summary", help="New summary")

    # tag
    p_tag = subparsers.add_parser("tag", help="Add/remove tags")
    p_tag.add_argument("id", help="Record ID (or prefix)")
    p_tag.add_argument("--add", help="Comma-separated tags to add")
    p_tag.add_argument("--remove", help="Comma-separated tags to remove")

    # export
    p_export = subparsers.add_parser("export", help="Export records as markdown")
    p_export.add_argument("--wing", required=True, help="Wing name or 'all'")

    # seed
    p_seed = subparsers.add_parser("seed", help="Seed records from a file")
    p_seed.add_argument("--file", required=True, help="Source file path")
    p_seed.add_argument("--wing", required=True, help="Target wing")

    # stats
    subparsers.add_parser("stats", help="Show palace statistics")

    # context-brief
    subparsers.add_parser("context-brief", help="Session start context brief")

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(1)

    commands = {
        "store": cmd_store,
        "query": cmd_query,
        "list": cmd_list,
        "get": cmd_get,
        "update": cmd_update,
        "tag": cmd_tag,
        "export": cmd_export,
        "seed": cmd_seed,
        "stats": cmd_stats,
        "context-brief": cmd_context_brief,
    }

    cmd_func = commands.get(args.command)
    if cmd_func:
        cmd_func(args)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == "__main__":
    main()
