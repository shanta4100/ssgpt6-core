export default function FounderMediaPage() {
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
        <section
          style={{
            padding: "24px",
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
            Founder Media Control
          </p>

          <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
            Founder Media Vault
          </h1>

          <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
            Private founder media review page for podcast, blogs, webinar, media,
            video, video creators, newsletter, and pricing-related checks.
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
          {[
            "Podcast",
            "Blogs",
            "Webinar",
            "Media",
            "Video",
            "Video Creators",
            "Newsletter",
            "Pricing",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "22px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(140,190,255,0.20)",
              }}
            >
              <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
                {item}
              </h2>
              <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
                Founder review area for {item.toLowerCase()} planning, records, checks, and future cloud save workflows.
              </p>
            </div>
          ))}
        </section>

        <section style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/admin/founder" style={primaryBtn}>Back to Founder Page</a>
          <a href="/media" style={secondaryBtn}>Public Media Page</a>
        </section>
      </div>
    </main>
  );
}

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