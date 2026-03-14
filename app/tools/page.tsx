export default function ToolsPage() {
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f7f9fc",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
    padding: "32px 20px"
  } as const;

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto"
  } as const;

  const headerStyle = {
    marginBottom: "28px"
  } as const;

  const titleStyle = {
    margin: 0,
    fontSize: "40px",
    color: "#0b1f3a"
  } as const;

  const subtitleStyle = {
    marginTop: "12px",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#4b5563",
    maxWidth: "760px"
  } as const;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px"
  } as const;

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
  } as const;

  const cardTitleStyle = {
    marginTop: 0,
    marginBottom: "12px",
    color: "#0b1f3a",
    fontSize: "24px"
  } as const;

  const cardTextStyle = {
    color: "#4b5563",
    lineHeight: "1.7",
    fontSize: "16px"
  } as const;

  const navBoxStyle = {
    marginTop: "28px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
  } as const;

  const navButtonsStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "16px"
  } as const;

  const darkButtonStyle = {
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#0b1f3a",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700
  } as const;

  const goldButtonStyle = {
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700
  } as const;

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>SSGPT6 Tools</h1>
          <p style={subtitleStyle}>
            A clean overview of the core systems inside the SSGPT6 platform.
            These tools form the foundation for automation, infrastructure,
            monitoring, and intelligent digital access.
          </p>
        </header>

        <section style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>AI Automation</h2>
            <p style={cardTextStyle}>
              Workflow execution, future sleeping-agent systems, task orchestration,
              and platform automation control.
            </p>
            <strong>Status: Active Foundation</strong>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Secure Infrastructure</h2>
            <p style={cardTextStyle}>
              Stable deployment architecture, clean hosting flow, domain routing,
              and core platform protection.
            </p>
            <strong>Status: Stable</strong>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Cloud Monitoring</h2>
            <p style={cardTextStyle}>
              Visibility into system health, deployment readiness, and future
              diagnostics across cloud environments.
            </p>
            <strong>Status: Expanding</strong>
          </div>

          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>Developer Integration</h2>
            <p style={cardTextStyle}>
              GitHub-connected workflows, future API modules, and a modular
              expansion path for the full SSGPT6 ecosystem.
            </p>
            <strong>Status: Ready</strong>
          </div>
        </section>

        <section style={navBoxStyle}>
          <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Navigation</h2>
          <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
            Use these links to move through the core platform.
          </p>

          <div style={navButtonsStyle}>
            <a href="/" style={darkButtonStyle}>
              Back Home
            </a>

            <a href="/dashboard" style={goldButtonStyle}>
              Open Dashboard
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}