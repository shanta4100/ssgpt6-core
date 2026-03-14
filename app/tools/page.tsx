import Footer from "../footer";

export default function ToolsPage() {
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

  const button = {
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
                  Tools & Automation Hub
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
                <a href="/tools" style={activeNav}>Tools</a>
                <a href="/videos" style={navLink}>Videos</a>
                <a href="/media" style={navLink}>Media</a>
                <a href="/pricing" style={navLink}>Pricing</a>
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
              Tools & Automation Hub
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#d9e4f5",
                maxWidth: "840px",
              }}
            >
              Explore the core systems that support automation, secure
              infrastructure, cloud monitoring, publishing operations, and future
              AI sleeping-agent workflows across the SSGPT6 platform.
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
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                AI Automation
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Workflow execution, future sleeping-agent systems, orchestration,
                and smart operational control.
              </p>
              <a href="/dashboard" style={button}>
                Open Dashboard
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Secure Infrastructure
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Clean hosting flow, deployment stability, domain routing, and core
                platform protection.
              </p>
              <a href="/about" style={button}>
                Learn More
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Cloud Monitoring
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Visibility into system health, diagnostics, deployment readiness,
                and operational awareness.
              </p>
              <a href="/media" style={button}>
                Open Media
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Developer Integration
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                GitHub-connected workflows, modular expansion, APIs, and future
                developer tooling.
              </p>
              <a href="/contact" style={button}>
                Contact
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Publishing Systems
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Support for blogs, newsletters, videos, podcasts, webinars, and
                official company releases.
              </p>
              <a href="/blogs" style={button}>
                Open Blogs
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Media Connector Layer
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Connect audiences to supported listening, viewing, and content
                access destinations from one hub.
              </p>
              <a href="/media" style={button}>
                Open Connectors
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
              Platform Operations Note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This tools page acts as the operational entry point for the SSGPT6
              Core system. It can later expand into a real admin toolset with
              automation controls, usage analytics, integrations, account tools,
              diagnostics, and self-managed workflows.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}