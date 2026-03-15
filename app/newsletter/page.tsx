"use client";

import { FormEvent, useState } from "react";

export default function NewsletterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Subscription failed.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Subscribed successfully.");
      setName("");
      setEmail("");
    } catch {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #06111f 0%, #0c1c2f 100%)",
        color: "#ffffff",
        padding: "48px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(153,204,255,0.22)",
          borderRadius: "18px",
          padding: "32px",
          boxShadow: "0 0 24px rgba(0,140,255,0.08)",
        }}
      >
        <p
          style={{
            color: "#9cc9ff",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          GNAIAAAC LLC • Powered by SSGPT6-CORE
        </p>

        <h1 style={{ marginTop: 0, marginBottom: "12px" }}>Newsletter Signup</h1>

        <p style={{ color: "#dbe7ff", lineHeight: 1.7 }}>
          Subscribe for updates, platform news, project releases, media posts,
          and future service announcements.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <label htmlFor="newsletter-name" style={{ fontWeight: 700 }}>
            Full Name
          </label>
          <input
            id="newsletter-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid rgba(153,204,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              outline: "none",
            }}
          />

          <label htmlFor="newsletter-email" style={{ fontWeight: 700 }}>
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid rgba(153,204,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              outline: "none",
            }}
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
            {loading ? "Submitting..." : "Subscribe"}
          </button>

          {message ? (
            <p
              style={{
                marginTop: "10px",
                color: "#ffd67a",
                fontWeight: 700,
              }}
            >
              {message}
            </p>
          ) : null}
        </form>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(153,204,255,0.25)",
            }}
          >
            Back to Home
          </a>

          <a
            href="/media"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textDecoration: "none",
              border: "1px solid rgba(153,204,255,0.25)",
            }}
          >
            Media Center
          </a>
        </div>
      </div>
    </main>
  );
}