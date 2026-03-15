import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export async function GET() {
  try {
    const q = query(collection(db, "founder_docs"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || "",
        category: data.category || "",
        content: data.content || "",
        createdAt: data.createdAt?.toDate?.().toISOString?.() || "",
      };
    });

    return NextResponse.json({
      ok: true,
      items,
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

    await addDoc(collection(db, "founder_docs"), {
      title,
      category,
      content,
      createdAt: serverTimestamp(),
    });

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