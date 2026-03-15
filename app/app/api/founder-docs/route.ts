import { NextResponse } from "next/server";

type FounderDoc = {
  title: string;
  category: string;
  content: string;
  createdAt: string;
};

const memoryStore: FounderDoc[] = [];

export async function GET() {
  return NextResponse.json({
    ok: true,
    items: memoryStore,
  });
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

    const entry: FounderDoc = {
      title,
      category,
      content,
      createdAt: new Date().toISOString(),
    };

    memoryStore.unshift(entry);

    return NextResponse.json({
      ok: true,
      message: "Founder document saved successfully.",
      item: entry,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong while saving the founder document." },
      { status: 500 }
    );
  }
}