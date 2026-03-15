export default function HomePage() {
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
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
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

        <h1 style={{ marginTop: 0, marginBottom: "12px", fontSize: "42px" }}>
          SSGPT6-CORE
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            color: "#dbe7ff",
            lineHeight: 1.7,
            fontSize: "18px",
          }}
        >
          Welcome to SSGPT6-CORE. Access pricing, contact, media, and newsletter
          pages from one simple home page.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/pricing"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View Pricing
          </a>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid rgba(153,204,255,0.25)",
            }}
          >
            Contact
          </a>

          <a
            href="/media"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid rgba(153,204,255,0.25)",
            }}
          >
            Media Center
          </a>

          <a
            href="/newsletter"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid rgba(153,204,255,0.25)",
            }}
          >
            Newsletter
          </a>
        </div>
      </div>
    </main>
  );
}