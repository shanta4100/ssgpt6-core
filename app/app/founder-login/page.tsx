"use client";

import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function FounderLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/admin/founder";
    } catch (error: any) {
      setMessage(error?.message || "Login failed.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #07111d 0%, #0c1d31 100%)",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          padding: "28px",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(140,190,255,0.20)",
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
          Founder Access
        </p>

        <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
          Founder Login
        </h1>

        <p style={{ color: "#dbe7ff", lineHeight: 1.7 }}>
          Sign in with your founder email and password to open the private admin area.
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display: "grid",
            gap: "12px",
            marginTop: "18px",
          }}
        >
          <label htmlFor="founder-email" style={{ fontWeight: 700 }}>
            Email
          </label>
          <input
            id="founder-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="founder@email.com"
            style={inputStyle}
          />

          <label htmlFor="founder-password" style={{ fontWeight: 700 }}>
            Password
          </label>
          <input
            id="founder-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            style={inputStyle}
          />

          <button type="submit" disabled={loading} style={primaryBtn}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {message ? (
            <p style={{ marginTop: "8px", color: "#ffd67a", fontWeight: 700 }}>
              {message}
            </p>
          ) : null}
        </form>

        <div style={{ marginTop: "18px" }}>
          <a href="/" style={secondaryBtn}>
            Back to Home
          </a>
        </div>
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