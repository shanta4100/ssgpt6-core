import { NextResponse } from "next/server";

type SSDILogEntry = {
  name: string;
  category: string;
  amount: string;
  notes: string;
  createdAt: string;
};

const memoryStore: SSDILogEntry[] = [];

export async function GET() {
  return NextResponse.json({
    ok: true,
    items: memoryStore,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const category = String(body.category || "").trim();
    const amount = String(body.amount || "").trim();
    const notes = String(body.notes || "").trim();

    if (!name || !category || !amount) {
      return NextResponse.json(
        {
          ok: false,
          message: "Name, category, and amount are required.",
        },
        { status: 400 }
      );
    }

    const entry: SSDILogEntry = {
      name,
      category,
      amount,
      notes,
      createdAt: new Date().toISOString(),
    };

    memoryStore.unshift(entry);

    return NextResponse.json({
      ok: true,
      message: "SSDI log saved successfully.",
      item: entry,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while saving the SSDI log.",
      },
      { status: 500 }
    );
  }
}