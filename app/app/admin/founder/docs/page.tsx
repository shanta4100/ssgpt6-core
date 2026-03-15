"use client";

import { FormEvent, useEffect, useState } from "react";

type FounderDoc = {
  id: number;
  title: string;
  category: string;
  content: string;
  created_at: string;
};

export default function FounderDocsPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<FounderDoc[]>([]);

  async function loadItems() {
    try {
      const res = await fetch("/api/founder-docs", { cache: "no-store" });
      const data = await res.json();
      if (data?.ok) {
        setItems(data.items || []);
      } else {
        setMessage(data.message || "Failed to load documents.");
      }
    } catch {
      setMessage("Network error while loading documents.");
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
      const res = await fetch("/api/founder-docs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Failed to save document.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Document saved.");
      setTitle("");
      setCategory("");
      setContent("");
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
        <section style={panel}>
          <p style={eyebrow}>Founder Private Documents</p>
          <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
            Document Generator and Save Vault
          </h1>
          <p style={text}>
            Create founder-only records, master bundles, notes, policy drafts,
            planning documents, and internal private content.
          </p>
        </section>

        <section style={panel}>
          <h2 style={{ marginTop: 0 }}>Create New Founder Document</h2>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
            <label htmlFor="doc-title" style={label}>Document Title</label>
            <input
              id="doc-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Founder Master Bundle"
              style={inputStyle}
            />

            <label htmlFor="doc-category" style={label}>Category</label>
            <input
              id="doc-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Example: SSDI, Business, Legal, Admin"
              style={inputStyle}
            />

            <label htmlFor="doc-content" style={label}>Content</label>
            <textarea
              id="doc-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your founder document here..."
              rows={10}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button type="submit" disabled={loading} style={primaryBtn}>
              {loading ? "Saving..." : "Save Founder Document"}
            </button>

            {message ? <p style={messageStyle}>{message}</p> : null}
          </form>
        </section>

        <section style={panel}>
          <h2 style={{ marginTop: 0 }}>Saved Founder Documents</h2>

          {items.length === 0 ? (
            <p style={text}>No saved founder documents yet.</p>
          ) : (
            <div style={{ display: "grid", gap: "14px" }}>
              {items.map((item) => (
                <div key={item.id} style={docCard}>
                  <p style={{ margin: "0 0 8px", fontWeight: 700 }}>{item.title}</p>
                  <p style={{ margin: "0 0 6px", color: "#dbe7ff" }}>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p style={{ margin: "0 0 6px", color: "#dbe7ff", whiteSpace: "pre-wrap" }}>
                    {item.content}
                  </p>
                  <p style={{ margin: 0, color: "#9cc9ff", fontSize: "12px" }}>
                    {item.created_at}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/admin/founder" style={primaryBtn}>Back to Founder Page</a>
          <a href="/admin" style={secondaryBtn}>Back to Admin</a>
        </section>
      </div>
    </main>
  );
}

const panel: React.CSSProperties = {
  padding: "24px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(140,190,255,0.20)",
  marginBottom: "24px",
};

const eyebrow: React.CSSProperties = {
  margin: 0,
  color: "#9cc9ff",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontSize: "12px",
};

const text: React.CSSProperties = {
  margin: 0,
  color: "#dbe7ff",
  lineHeight: 1.7,
};

const label: React.CSSProperties = {
  fontWeight: 700,
};

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(153,204,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  outline: "none",
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(153,204,255,0.25)",
};

const messageStyle: React.CSSProperties = {
  marginTop: "8px",
  color: "#ffd67a",
  fontWeight: 700,
};

const docCard: React.CSSProperties = {
  padding: "16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,190,255,0.16)",
};