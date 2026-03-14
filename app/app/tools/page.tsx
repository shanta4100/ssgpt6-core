export default function ToolsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 45%, #f4f7fb 45%, #f4f7fb 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            paddingTop: "10px",
            paddingBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.05",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            SSGPT6 Tools
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d9e4f5",
              maxWidth: "820px",
            }}
          >
            A clean overview of the core systems inside the SSGPT6 platform.
            These tools form the foundation for automation, infrastructure,
            monitoring, and intelligent digital access.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <a
              href="/"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: "14px",
                backgroundColor: "#c9a227",
                color: "#0b1f3a",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Back Home
            </a>

            <a
              href="/dashboard"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: "14px",
                backgroundColor: "#ffffff",
                color: "#0b1f3a",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Open Dashboard
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              AI Automation
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Workflow execution, future sleeping-agent systems, task
              orchestration, and platform automation control.
            </p>
            <strong style={{ color: "#0b1f3a", fontSize: "18px" }}>
              Status: Active Foundation
            </strong>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Secure Infrastructure
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Stable deployment architecture, clean hosting flow, domain
              routing, and core platform protection.
            </p>
            <strong style={{ color: "#0b1f3a", fontSize: "18px" }}>
              Status: Stable
            </strong>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Cloud Monitoring
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              Visibility into system health, deployment readiness, and future
              diagnostics across cloud environments.
            </p>
            <strong style={{ color: "#0b1f3a", fontSize: "18px" }}>
              Status: Expanding
            </strong>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Developer Integration
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              GitHub-connected workflows, future API modules, and a modular
              expansion path for the full SSGPT6 ecosystem.
            </p>
            <strong style={{ color: "#0b1f3a", fontSize: "18px" }}>
              Status: Ready
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
}