export default function HomePage() {
  return (
    <main style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1>SSGPT6-CORE</h1>
      <p>Welcome to SSGPT6-CORE.</p>

      <div style={{ marginTop: "24px" }}>
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
      </div>
    </main>
  );
}