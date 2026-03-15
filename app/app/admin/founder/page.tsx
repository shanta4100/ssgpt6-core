export default function FounderPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #07111d 0%, #0c1d31 100%)",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section
          style={{
            padding: "28px",
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
            Founder Personal Admin
          </p>

          <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
            Founder Control Page
          </h1>

          <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
            Private founder section for document generation, protected records,
            notes, internal workflows, and future cloud automation tools.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <a
            href="/admin/founder/docs"
            style={cardStyle}
          >
            <h2 style={cardTitle}>Founder Documents</h2>
            <p style={cardText}>
              Generate and save founder-only records, notes, bundles, and private documents.
            </p>
          </a>

          <a
            href="/admin/ssdi"
            style={cardStyle}
          >
            <h2 style={cardTitle}>SSDI Tracker</h2>
            <p style={cardText}>
              Internal compliance-assist page for founder recordkeeping and review.
            </p>
          </a>

          <a
            href="/admin/ssdi-log"
            style={cardStyle}
          >
            <h2 style={cardTitle}>SSDI Log</h2>
            <p style={cardText}>
              Save internal entries, categories, amounts, and founder notes.
            </p>
          </a>
        </section>

        <section
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a href="/admin" style={primaryBtn}>Back to Admin</a>
          <a href="/" style={secondaryBtn}>Back to Home</a>
        </section>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  color: "#ffffff",
  padding: "22px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(140,190,255,0.20)",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "22px",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#dbe7ff",
  lineHeight: 1.7,
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
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