export default function DashboardPage() {
  return (
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            paddingTop: "10px",
            paddingBottom: "42px",
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
            SSGPT6 Dashboard
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d9e4f5",
              maxWidth: "860px",
            }}
          >
            A clean founder-facing dashboard for platform visibility, system
            direction, infrastructure awareness, and future automation control.
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
              href="/tools"
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
              View Tools
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
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
              System Status
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Core platform status, deployment readiness, and clean visibility
              across key operating areas.
            </p>
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
              Automation Layer
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Future AI workflows, sleeping-agent controls, and system actions
              can be surfaced here as the platform expands.
            </p>
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
              Founder Control
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              This area represents the founder-led control surface for SSGPT6
              Core, guiding structure, growth, and system direction.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            backgroundColor: "#ffffff",
            borderRadius: "22px",
            padding: "30px",
            boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "18px",
              color: "#0b1f3a",
              fontSize: "34px",
            }}
          >
            Dashboard Summary
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
            }}
          >
            The dashboard is the central internal layer of the SSGPT6 Core
            platform. It gives a simple, clean structure for viewing important
            platform information while leaving room for future automation,
            analytics, alerts, and governance modules.
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: 0,
            }}
          >
            As the project grows, this page can evolve into a stronger command
            center for system health, deployment tracking, cloud visibility, and
            AI operations.
          </p>
        </div>
      </section>
    </main>
  );
}