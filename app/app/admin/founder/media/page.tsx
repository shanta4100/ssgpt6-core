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
            Private founder media area for podcast planning, video links,
            webinar records, newsletter drafts, media notes, and future upload
            workflows.
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
          <div style={card}>
            <h2 style={cardTitle}>Video Records</h2>
            <p style={cardText}>
              Store featured video links, launch content, and founder video references.
            </p>
          </div>

          <div style={card}>
            <h2 style={cardTitle}>Podcast Records</h2>
            <p style={cardText}>
              Track podcast episodes, audio notes, and publishing plans.
            </p>
          </div>

          <div style={card}>
            <h2 style={cardTitle}>Webinar Records</h2>
            <p style={cardText}>
              Manage webinar topics, session notes, and private event planning.
            </p>
          </div>

          <div style={card}>
            <h2 style={cardTitle}>Newsletter Archive</h2>
            <p style={cardText}>
              Keep newsletter drafts, subject lines, and founder releases together.
            </p>
          </div>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Media Direction</h2>
          <p style={{ color: "#dbe7ff", lineHeight: 1.8 }}>
            This page is the founder-only media control space. Later this can
            connect to permanent cloud save, file upload, video archive,
            podcast records, webinar access, newsletter storage, and AI media
            reminders.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a href="/admin/founder" style={primaryBtn}>
            Back to Founder Page
          </a>
          <a href="/media" style={secondaryBtn}>
            Public Media Page
          </a>
          <a href="/admin" style={secondaryBtn}>
            Back to Admin
          </a>
        </section>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
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