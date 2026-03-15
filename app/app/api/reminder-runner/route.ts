import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export async function GET() {
  try {
    const now = new Date().toISOString();

    const q = query(
      collection(db, "reminders"),
      where("triggerDate", "<=", now),
      where("status", "==", "pending"),
      orderBy("triggerDate", "asc")
    );

    const snapshot = await getDocs(q);

    const processed: string[] = [];

    for (const reminderDoc of snapshot.docs) {
      const data = reminderDoc.data();

      await addDoc(collection(db, "reminder_history"), {
        title: data.title || "",
        category: data.category || "",
        message: data.message || "",
        audience: data.audience || "",
        triggerDate: data.triggerDate || "",
        sentAt: serverTimestamp(),
      });

      await updateDoc(doc(db, "reminders", reminderDoc.id), {
        status: "sent",
        sentAt: serverTimestamp(),
      });

      processed.push(reminderDoc.id);
    }

    return NextResponse.json({
      ok: true,
      processedCount: processed.length,
      processed,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Auto reminder runner failed." },
      { status: 500 }
    );
  }
}