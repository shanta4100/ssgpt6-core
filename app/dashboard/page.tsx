import Footer from "../footer";

export default function DashboardPage() {
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

  const statCard = {
    backgroundColor: "#f8fbff",
    borderRadius: "18px",
    padding: "20px",
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
                  Founder Control Panel
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
                <a href="/admin" style={navLink}>Admin</a>
                <a href="/dashboard" style={activeNav}>Dashboard</a>
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
              Founder dashboard
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
              Monitor your platform, organize publishing, review media sections,
              and prepare for future AI sleeping-agent automation from one central
              dashboard.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginBottom: "24px",
            }}
          >
            <div style={statCard}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Platform Status
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Active
              </h3>
            </div>

            <div style={statCard}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Media Sections
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                7
              </h3>
            </div>

            <div style={statCard}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Admin Mode
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Ready
              </h3>
            </div>

            <div style={statCard}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Automation Layer
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Expanding
              </h3>
            </div>
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
                Media Control
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Review videos, blogs, podcasts, newsletters, webinars, and public
                release pages from one overview.
              </p>
              <a href="/media" style={darkButton}>
                Open Media
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Publishing Flow
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Prepare for future content publishing, review workflows, and
                founder-led approvals across the platform.
              </p>
              <a href="/blogs" style={darkButton}>
                Open Publishing
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                User Access
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Organize future free users, paid members, and protected admin
                roles within one system structure.
              </p>
              <a href="/pricing" style={darkButton}>
                View Pricing
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                AI Sleeping Agent
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Reserve this area for future automation, self-monitoring,
                diagnostics, system alerts, and black-box workflow tools.
              </p>
              <a href="/tools" style={darkButton}>
                Open Tools
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
              Founder Note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This dashboard is the central internal layer for SSGPT6 Core. It
              can later expand with real analytics, publishing actions, media
              upload controls, billing overview, role permissions, and automated
              platform health systems.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}