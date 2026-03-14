export default function ToolsPage() {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        padding: "40px 24px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ marginBottom: "28px" }}>
          <h1 style={{ margin: 0, fontSize: "38px", color: "#0b1f3a" }}>
            SSGPT6 Tools
          </h1>
          <p style={{ fontSize: "18px", color: "#4b5563", marginTop: "12px", maxWidth: "760px" }}>
            A clean overview of the core systems inside the SSGPT6 platform.
            These tools form the foundation for automation, infrastructure, and
            intelligent digital access.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px"
          }}
        >
          <section style={cardStyle}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>AI Automation</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
              Workflow execution, scheduled actions, monitoring, and future
              sleeping-agent automation systems.
            </p>
            <strong>Status: Active Foundation</strong>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Secure Infrastructure</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
              Stable deployment structure, hosting control, domain routing,
              and core platform protection.
            </p>
            <strong>Status: Stable</strong>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Cloud Monitoring</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
              Visibility into project health, deployment checks, and future
              system diagnostics across cloud environments.
            </p>
            <strong>Status: Expanding</strong>
          </section>

          <section style={cardStyle}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Developer Integration</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
              GitHub-connected workflows, future API integrations, and modular
              expansion for the SSGPT6 ecosystem.
            </p>
            <strong>Status: Ready</strong>
          </section>
        </div>

        <div
          style={{
            marginTop: "28px",
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Navigation</h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              href="/"
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                backgroundColor: "#0b1f3a",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700
              }}
            >
              Back Home
            </a>

            <a
              href="/dashboard"
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                backgroundColor: "#c9a227",
                color: "#0b1f3a",
                textDecoration: "none",
                fontWeight: 700
              }}
            >
              Open Dashboard
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}