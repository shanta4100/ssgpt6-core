export default function HomePage() {
  return (
    <main style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1>SSGPT6-CORE</h1>
      <p>Welcome to SSGPT6-CORE.</p>

      <div
        style={{
          marginTop: "24px",
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
            background: "#1f7fff",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View Pricing
        </a>

        <a
          href="/media"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "#0f2742",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 700,
            border: "1px solid #2f5f94",
          }}
        >
          Media Center
        </a>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "#0f2742",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 700,
            border: "1px solid #2f5f94",
          }}
        >
          Contact
        </a>
      </div>
    </main>
  );
}