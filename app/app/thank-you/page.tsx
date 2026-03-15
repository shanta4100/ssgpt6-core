"use client";

import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [autoVoice, setAutoVoice] = useState(false);

  const thankYouMessage =
    "Thank you for your purchase. GNAIAAAC LLC truly appreciates your support and service. We are grateful to welcome you, and we look forward to serving you with care, respect, and excellence.";

  function speakMessage() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(thankYouMessage);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((v) => /female|zira|samantha|victoria|karen/i.test(v.name)) ||
      voices.find((v) => /en/i.test(v.lang));

    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (autoVoice) {
      speakMessage();
    }
  }, [autoVoice]);

  return (
    <main style={page}>
      <div style={container}>
        <section style={heroCard}>
          <p style={eyebrow}>GNAIAAAC LLC • Powered by SSGPT6-CORE</p>
          <h1 style={title}>Thank You for Your Purchase</h1>
          <p style={subtitle}>
            Your payment was received with appreciation, and we are honored to serve you.
          </p>
        </section>

        <section style={mainCard}>
          <div style={grid}>
            <div style={messageCard}>
              <h2 style={h2}>A Warm Thank You</h2>
              <p style={messageText}>
                Thank you for your purchase. GNAIAAAC LLC appreciates your trust,
                your service, and your support. We are grateful to welcome you.
              </p>
              <p style={messageText}>
                Your order helps support our work, our technology direction, and
                our commitment to building thoughtful services with care and respect.
              </p>
              <p style={messageText}>
                We hope your experience feels warm, professional, and memorable.
              </p>
            </div>

            <div style={avatarCard}>
              <div style={avatarCircle}>Lady Avatar</div>
              <h3 style={{ marginBottom: "10px" }}>Greeting Anchor</h3>
              <p style={messageText}>
                A graceful thank-you presentation area for a future nice lady avatar,
                greeting animation, or anchored customer welcome.
              </p>
            </div>
          </div>
        </section>

        <section style={mainCard}>
          <h2 style={h2}>Voice Commands</h2>
          <div style={buttonRow}>
            <button onClick={speakMessage} style={primaryBtn}>
              Speak Thank You Message
            </button>

            <button onClick={() => setAutoVoice(true)} style={secondaryBtn}>
              Enable Auto Voice Greeting
            </button>
          </div>

          <div style={{ marginTop: "16px" }}>
            <p style={voicePrompt}>Suggested voice greeting text:</p>
            <div style={voiceBox}>
              “Thank you for your purchase. GNAIAAAC LLC appreciates your support and service.”
            </div>
          </div>
        </section>

        <section style={mainCard}>
          <h2 style={h2}>Customer Care Message</h2>
          <p style={messageText}>
            Thank you for choosing us. We deeply appreciate your purchase and your trust.
            Your support means a great deal to GNAIAAAC LLC, and we are pleased to serve you.
          </p>
          <p style={messageText}>
            We hope your journey with us is smooth, beautiful, and rewarding.
          </p>
        </section>

        <section style={buttonRow}>
          <a href="/" style={primaryLink}>Back to Home</a>
          <a href="/pricing" style={secondaryLink}>View Pricing</a>
          <a href="/contact" style={secondaryLink}>Contact Us</a>
        </section>
      </div>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #081220 0%, #122744 100%)",
  color: "#ffffff",
  padding: "32px 20px",
  fontFamily: "Arial, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const heroCard: React.CSSProperties = {
  padding: "28px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,215,122,0.28)",
  marginBottom: "24px",
  textAlign: "center",
};

const mainCard: React.CSSProperties = {
  padding: "24px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(140,190,255,0.20)",
  marginBottom: "24px",
};

const eyebrow: React.CSSProperties = {
  margin: 0,
  color: "#ffd67a",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontSize: "12px",
};

const title: React.CSSProperties = {
  marginTop: "12px",
  marginBottom: "12px",
  fontSize: "42px",
};

const subtitle: React.CSSProperties = {
  margin: 0,
  color: "#e7eefc",
  lineHeight: 1.7,
  fontSize: "18px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const messageCard: React.CSSProperties = {
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,190,255,0.16)",
};

const avatarCard: React.CSSProperties = {
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,190,220,0.18)",
  textAlign: "center",
};

const avatarCircle: React.CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  margin: "0 auto 16px",
  display: "grid",
  placeItems: "center",
  background: "radial-gradient(circle, #ffe1f0 0%, #f6b7d2 45%, #8f4e82 100%)",
  color: "#1d1020",
  fontWeight: 700,
};

const h2: React.CSSProperties = {
  marginTop: 0,
  color: "#ffd67a",
};

const messageText: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#dbe7ff",
  lineHeight: 1.8,
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #ffcf66, #ffd67a)",
  color: "#182235",
  fontWeight: 700,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(153,204,255,0.25)",
  cursor: "pointer",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  fontWeight: 700,
};

const primaryLink: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryLink: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(153,204,255,0.25)",
};

const voicePrompt: React.CSSProperties = {
  margin: "0 0 10px",
  color: "#ffd67a",
  fontWeight: 700,
};

const voiceBox: React.CSSProperties = {
  padding: "16px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,215,122,0.20)",
  color: "#e8efff",
};