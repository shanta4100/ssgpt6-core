import { NextResponse } from "next/server";

type FounderDoc = {
  id: number;
  title: string;
  category: string;
  content: string;
  created_at: string;
};

function getDB() {
  const db = (globalThis as any).process?.env?.DB;
  return db;
}

export async function GET() {
  try {
    const db = getDB();

    if (!db) {
      return NextResponse.json(
        { ok: false, message: "Database connection not available." },
        { status: 500 }
      );
    }

    const result = await db
      .prepare(
        `SELECT id, title, category, content, created_at
         FROM founder_docs
         ORDER BY id DESC`
      )
      .all();

    return NextResponse.json({
      ok: true,
      items: (result.results || []) as FounderDoc[],
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to load founder documents." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const title = String(body.title || "").trim();
    const category = String(body.category || "").trim();
    const content = String(body.content || "").trim();

    if (!title || !category || !content) {
      return NextResponse.json(
        { ok: false, message: "Title, category, and content are required." },
        { status: 400 }
      );
    }

    const db = getDB();

    if (!db) {
      return NextResponse.json(
        { ok: false, message: "Database connection not available." },
        { status: 500 }
      );
    }

    await db
      .prepare(
        `INSERT INTO founder_docs (title, category, content)
         VALUES (?, ?, ?)`
      )
      .bind(title, category, content)
      .run();

    return NextResponse.json({
      ok: true,
      message: "Founder document saved successfully.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong while saving the founder document." },
      { status: 500 }
    );
  }
}