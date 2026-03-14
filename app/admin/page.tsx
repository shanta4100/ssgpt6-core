import Footer from "../footer";

export default function AdminPage() {
  const navLink = {
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: 600,
  } as const;

  const activeNav = {
    color: "#0b1f3a",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    fontWeight: 700,
  } as const;

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const darkButton = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#0b1f3a",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #081a36 0%, #0b2347 42%, #f4f7fb 42%, #f4f7fb 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            padding: "40px 20px 80px",
          }}
        >
          <div style={{ color: "#ffffff", paddingBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <div>
                <h1 style={{ fontSize: "32px", margin: 0, fontWeight: 800 }}>
                  SSGPT6 Core
                </h1>
                <p
                  style={{
                    marginTop: "8px",
                    marginBottom: 0,
                    color: "#d9e4f5",
                    fontSize: "18px",
                  }}
                >
                  Admin Control Center
                </p>
              </div>

              <nav
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a href="/" style={navLink}>Home</a>
                <a href="/tools" style={navLink}>Tools</a>
                <a href="/media" style={navLink}>Media</a>
                <a href="/pricing" style={navLink}>Pricing</a>
                <a href="/admin" style={activeNav}>Admin</a>
                <a href="/dashboard" style={navLink}>Dashboard</a>
              </nav>
            </div>

            <h2
              style={{
                fontSize: "56px",
                lineHeight: "1.05",
                margin: 0,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              Internal admin operations
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#d9e4f5",
                maxWidth: "860px",
              }}
            >
              This section is reserved for protected internal workflows, content
              management, publishing controls, user oversight, and future AI
              sleeping-agent operational tools.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Content Control
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Manage blogs, videos, podcasts, newsletters, webinars, and
                company releases from one internal location.
              </p>
              <a href="/dashboard" style={darkButton}>
                Open Dashboard
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                User Management
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Review user access, subscription roles, public plans, and future
                member account limits.
              </p>
              <a href="/pricing" style={darkButton}>
                View Plans
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Platform Monitoring
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Watch platform status, deployment health, cloud activity, and
                future automated diagnostics.
              </p>
              <a href="/tools" style={darkButton}>
                Open Tools
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                AI Automation
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Future home for automation control, system triggers, workflow
                rules, and black-box sleeping-agent logic.
              </p>
              <a href="/tools" style={darkButton}>
                View Automation
              </a>
            </div>
          </div>

          <div style={{ ...card, marginTop: "24px" }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Admin Protection Note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This page should later be protected behind real login, role-based
              access, and admin-only session controls. For now, it works as the
              structural admin page for your SSGPT6 Core platform.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}