import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export async function GET() {
  try {
    const q = query(collection(db, "reminders"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || "",
        category: data.category || "",
        message: data.message || "",
        audience: data.audience || "",
        triggerDate: data.triggerDate || "",
        createdAt: data.createdAt?.toDate?.().toISOString?.() || "",
      };
    });

    return NextResponse.json({ ok: true, items });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to load reminders." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const title = String(body.title || "").trim();
    const category = String(body.category || "").trim();
    const message = String(body.message || "").trim();
    const audience = String(body.audience || "").trim();
    const triggerDate = String(body.triggerDate || "").trim();

    if (!title || !category || !message || !audience || !triggerDate) {
      return NextResponse.json(
        { ok: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "reminders"), {
      title,
      category,
      message,
      audience,
      triggerDate,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      ok: true,
      message: "Reminder saved successfully.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to save reminder." },
      { status: 500 }
    );
  }
}