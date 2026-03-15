"use client";

import { FormEvent, useEffect, useState } from "react";

type VaultItem = {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
};

export default function FounderVaultPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<VaultItem[]>([]);

  async function loadItems() {
    try {
      const res = await fetch("/api/founder-vault", { cache: "no-store" });
      const data = await res.json();
      if (data?.ok) setItems(data.items || []);
    } catch {
      setStatus("Failed to load founder vault.");
    }
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/founder-vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Failed to save vault item.");
        setLoading(false);
        return;
      }

      setStatus(data.message || "Founder vault item saved.");
      setTitle("");
      setCategory("");
      setContent("");
      await loadItems();
    } catch {
      setStatus("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main style={page}>
      <div style={container}>
        <section style={panel}>
          <p style={eyebrow}>Founder Private Vault</p>
          <h1 style={h1}>Founder Vault</h1>
          <p style={text}>
            Private founder-only vault for sensitive notes, business records,
            media plans, personal bundles, and protected internal documents.
          </p>
        </section>

        <section style={panel}>
          <h2 style={h2}>Create Vault Record</h2>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
            <label style={label}>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Founder Private Note"
              style={input}
            />

            <label style={label}>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Example: Personal, Business, SSDI, Media, Legal"
              style={input}
            />

            <label style={label}>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write private founder content here..."
              rows={10}
              style={{ ...input, resize: "vertical" }}
            />

            <button type="submit" disabled={loading} style={primaryBtn}>
              {loading ? "Saving..." : "Save to Founder Vault"}
            </button>

            {status ? <p style={statusStyle}>{status}</p> : null}
          </form>
        </section>

        <section style={panel}>
          <h2 style={h2}>Saved Vault Records</h2>

          {items.length === 0 ? (
            <p style={text}>No founder vault records yet.</p>
          ) : (
            <div style={{ display: "grid", gap: "14px" }}>
              {items.map((item) => (
                <div key={item.id} style={card}>
                  <p style={{ margin: "0 0 8px", fontWeight: 700 }}>{item.title}</p>
                  <p style={smallText}><strong>Category:</strong> {item.category}</p>
                  <p style={{ ...smallText, whiteSpace: "pre-wrap" }}>{item.content}</p>
                  <p style={timeText}>{item.createdAt}</p>
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

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #081220 0%, #0d1f35 100%)",
  color: "#ffffff",
  padding: "32px 20px",
  fontFamily: "Arial, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

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

const h1: React.CSSProperties = {
  marginTop: "10px",
  marginBottom: "12px",
};

const h2: React.CSSProperties = { marginTop: 0 };

const text: React.CSSProperties = {
  margin: 0,
  color: "#dbe7ff",
  lineHeight: 1.7,
};

const smallText: React.CSSProperties = {
  margin: "0 0 6px",
  color: "#dbe7ff",
};

const timeText: React.CSSProperties = {
  margin: 0,
  color: "#9cc9ff",
  fontSize: "12px",
};

const label: React.CSSProperties = { fontWeight: 700 };

const input: React.CSSProperties = {
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

const statusStyle: React.CSSProperties = {
  marginTop: "8px",
  color: "#ffd67a",
  fontWeight: 700,
};

const card: React.CSSProperties = {
  padding: "16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,190,255,0.16)",
};