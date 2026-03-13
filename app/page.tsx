export default function Home() {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    textDecoration: "none",
    color: "#111827",
    display: "block"
  } as const;

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
    marginTop: "12px"
  } as const;

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(180deg, #0b1f3a 0%, #102b52 40%, #f7f9fc 40%, #f7f9fc 100%)",
        minHeight: "100vh",
        color: "#111827"
      }}
    >
      {/* Top bar */}
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#ffffff"
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "26px" }}>SSGPT6 Core</h1>
          <p style={{ margin: "6px 0 0 0", opacity: 0.9 }}>
            Intelligent Digital Access Platform
          </p>
        </div>

        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#features" style={{ color: "#ffffff", textDecoration: "none" }}>
            Features
          </a>
          <a href="#gallery" style={{ color: "#ffffff", textDecoration: "none" }}>
            Image Menu
          </a>
          <a href="/dashboard" style={{ color: "#ffffff", textDecoration: "none" }}>
            Dashboard
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 60px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          alignItems: "center"
        }}
      >
        <div style={{ color: "#ffffff" }}>
          <h2 style={{ fontSize: "44px", lineHeight: 1.15, marginBottom: "16px" }}>
            Practical AI,
            <br />
            Secure Infrastructure,
            <br />
            Clean Control
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "620px" }}>
            SSGPT6 Core is a founder-led platform for AI automation, cloud monitoring,
            governance, and developer integration. Click the images below to explore
            the system visually.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
            <a href="/dashboard" style={buttonStyle}>
              Open Dashboard
            </a>
            <a
              href="#gallery"
              style={{
                ...buttonStyle,
                backgroundColor: "#ffffff",
                color: "#0b1f3a"
              }}
            >
              View Image Menu
            </a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.12)",
            borderRadius: "24px",
            padding: "20px",
            backdropFilter: "blur(8px)"
          }}
        >
          <a href="#gallery" style={{ textDecoration: "none" }}>
            <img
              src="/icon-512.png"
              alt="SSGPT6 Core visual"
              style={{
                width: "100%",
                maxWidth: "420px",
                display: "block",
                margin: "0 auto",
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                padding: "12px",
                cursor: "pointer"
              }}
            />
          </a>

          <p
            style={{
              textAlign: "center",
              color: "#ffffff",
              marginTop: "14px",
              fontSize: "15px"
            }}
          >
            Click the main image to jump to the image menu
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section
        id="features"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px 20px 24px"
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "18px", color: "#0b1f3a" }}>
          Platform Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px"
          }}
        >
          <div style={cardStyle}>
            <h3>AI Automation</h3>
            <p>Automated workflows, AI task execution, and future sleeping-agent control.</p>
          </div>

          <div style={cardStyle}>
            <h3>Secure Infrastructure</h3>
            <p>Clean deployment base, stable hosting, DNS discipline, and platform control.</p>
          </div>

          <div style={cardStyle}>
            <h3>Cloud Monitoring</h3>
            <p>Visibility across deployments, uptime, diagnostics, and future health systems.</p>
          </div>

          <div style={cardStyle}>
            <h3>Developer Integration</h3>
            <p>Expandable foundation for dashboards, tools, APIs, and future system modules.</p>
          </div>
        </div>
      </section>

      {/* Image Menu */}
      <section
        id="gallery"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 40px 24px"
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#0b1f3a" }}>
          Image Menu
        </h2>
        <p style={{ fontSize: "17px", color: "#4b5563", marginBottom: "24px" }}>
          Click any image or button to view a section or open the dashboard.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}
        >
          <a href="#vision" style={cardStyle}>
            <img
              src="/icon-512.png"
              alt="Core platform image"
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "14px",
                backgroundColor: "#f3f4f6"
              }}
            />
            <h3 style={{ marginTop: 0 }}>Core Vision</h3>
            <p>Click to view the platform mission and system direction.</p>
            <span style={buttonStyle}>View Vision</span>
          </a>

          <a href="#features" style={cardStyle}>
            <img
              src="/icon-192.png"
              alt="Feature image"
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "14px",
                backgroundColor: "#f3f4f6"
              }}
            />
            <h3 style={{ marginTop: 0 }}>Feature View</h3>
            <p>Click to return to the feature section and review platform capabilities.</p>
            <span style={buttonStyle}>See Features</span>
          </a>

          <a href="/dashboard" style={cardStyle}>
            <img
              src="/apple-touch-icon.png"
              alt="Dashboard image"
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "14px",
                backgroundColor: "#f3f4f6"
              }}
            />
            <h3 style={{ marginTop: 0 }}>Dashboard Page</h3>
            <p>Click to open the SSGPT6 dashboard and view the founder control page.</p>
            <span style={buttonStyle}>Open Dashboard</span>
          </a>
        </div>
      </section>

      {/* Vision section */}
      <section
        id="vision"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 24px 60px 24px"
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "30px", color: "#0b1f3a" }}>
            SSGPT6 Core Vision
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
            SSGPT6 Core is the base operating layer for AI automation, cloud stability,
            governance, and future digital systems. It is designed to begin with a clean,
            stable interface and grow safely into a larger intelligent platform.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
            <a href="/dashboard" style={buttonStyle}>
              Go to Dashboard
            </a>
            <a
              href="#gallery"
              style={{
                ...buttonStyle,
                backgroundColor: "#0b1f3a",
                color: "#ffffff"
              }}
            >
              Back to Image Menu
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}