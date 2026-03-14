export default function AdminPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #081a36 0%, #0b2347 100%)",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "32px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "40px", fontWeight: 800 }}>
            Founder Admin Panel
          </h1>
          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#d9e4f5",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "820px",
            }}
          >
            This is the private control area for founder operations, content
            publishing, user management, releases, media control, and future AI
            automation workflows.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Users</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Manage public members, paid subscribers, business users, and admin
              access.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Media Control</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Control homepage videos, media publishing, featured content, and
              future programming rotation.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Releases</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Publish company announcements, product releases, and official
              business communications.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Automation</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Future control area for sleeping-agent systems, scheduling,
              workflow triggers, and self-operated platform logic.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <a href="/dashboard" style={button}>
            Back to Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}