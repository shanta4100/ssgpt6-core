"use client";

import { FormEvent, useEffect, useState } from "react";

type SSDILogEntry = {
  name: string;
  category: string;
  amount: string;
  notes: string;
  createdAt: string;
};

export default function SSDILogPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<SSDILogEntry[]>([]);

  async function loadItems() {
    try {
      const res = await fetch("/api/ssdi-log");
      const data = await res.json();
      if (data?.ok) {
        setItems(data.items || []);
      }
    } catch {
      // ignore for now
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/ssdi-log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          amount,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Failed to save log.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Saved successfully.");
      setName("");
      setCategory("");
      setAmount("");
      setNotes("");
      await loadItems();
    } catch {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #081220 0%, #0d1f35 100%)",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#9cc9ff",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Founder Admin • Internal Records
          </p>

          <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
            SSDI Log Entry
          </h1>

          <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
            Add internal founder records for activity, income notes, category
            tracking, and private review. This page is for private organization
            only and does not replace official reporting.
          </p>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>New Log Entry</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <label htmlFor="ssdi-name" style={{ fontWeight: 700 }}>
              Name
            </label>
            <input
              id="ssdi-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Founder or record name"
              style={inputStyle}
            />

            <label htmlFor="ssdi-category" style={{ fontWeight: 700 }}>
              Category
            </label>
            <input
              id="ssdi-category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Income, Work Log, Evidence, Notes"
              style={inputStyle}
            />

            <label htmlFor="ssdi-amount" style={{ fontWeight: 700 }}>
              Amount
            </label>
            <input
              id="ssdi-amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Example: 250.00"
              style={inputStyle}
            />

            <label htmlFor="ssdi-notes" style={{ fontWeight: 700 }}>
              Notes
            </label>
            <textarea
              id="ssdi-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Private internal notes"
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                display: "inline-block",
                border: "none",
                cursor: "pointer",
                borderRadius: "999px",
                padding: "12px 18px",
                background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
                color: "#ffffff",
                fontWeight: 700,
                marginTop: "8px",
              }}
            >
              {loading ? "Saving..." : "Save Log"}
            </button>

            {message ? (
              <p
                style={{
                  marginTop: "8px",
                  color: "#ffd67a",
                  fontWeight: 700,
                }}
              >
                {message}
              </p>
            ) : null}
          </form>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Recent Entries</h2>

          {items.length === 0 ? (
            <p style={{ color: "#dbe7ff" }}>No entries yet.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {items.map((item, index) => (
                <div
                  key={`${item.createdAt}-${index}`}
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(140,190,255,0.16)",
                  }}
                >
                  <p style={{ margin: "0 0 8px", fontWeight: 700 }}>{item.name}</p>
                  <p style={{ margin: "0 0 6px", color: "#dbe7ff" }}>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p style={{ margin: "0 0 6px", color: "#dbe7ff" }}>
                    <strong>Amount:</strong> {item.amount}
                  </p>
                  <p style={{ margin: "0 0 6px", color: "#dbe7ff" }}>
                    <strong>Notes:</strong> {item.notes || "—"}
                  </p>
                  <p style={{ margin: 0, color: "#9cc9ff", fontSize: "12px" }}>
                    {item.createdAt}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a href="/admin/ssdi" style={buttonPrimary}>
            Back to SSDI Tracker
          </a>
          <a href="/admin" style={buttonSecondary}>
            Back to Admin
          </a>
        </section>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(153,204,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  outline: "none",
};

const buttonPrimary: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
};

const buttonSecondary: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(153,204,255,0.25)",
};