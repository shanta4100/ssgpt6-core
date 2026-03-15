export default function ContactPage() {
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
          maxWidth: "900px",
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
          SSGPT6-CORE
        </p>

        <h1 style={{ marginTop: 0, marginBottom: "12px" }}>Contact Us</h1>

        <p style={{ color: "#dbe7ff", lineHeight: 1.7 }}>
          Reach the right team through a structured contact and support pathway.
          Use this page for pricing questions, business inquiries, support
          requests, billing questions, accessibility help, and enterprise
          contact.
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>General Inquiry</h3>
            <p style={{ marginBottom: 0 }}>
              Questions about the platform, pricing, services, and public
              information.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Billing and Refund Support</h3>
            <p style={{ marginBottom: 0 }}>
              Questions about payment, invoice review, refund requests, or
              pricing clarification.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Enterprise and Business Contact</h3>
            <p style={{ marginBottom: 0 }}>
              For custom packages, large-scale support, and business-focused
              access.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "28px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "14px",
            padding: "20px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Contact Details</h2>
          <p>
            <strong>Organization:</strong> GNAIAAAC LLC
          </p>
          <p>
            <strong>Platform:</strong> Powered by SSGPT6-CORE
          </p>
          <p>
            <strong>Email:</strong> [Insert Official Email]
          </p>
          <p>
            <strong>Website:</strong> [Insert Website URL]
          </p>
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <a
            href="/pricing"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Back to Pricing
          </a>

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
        </div>
      </div>
    </main>
  );
}