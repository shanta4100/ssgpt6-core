export default function PricingPage() {
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
    padding: "30px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

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
                SSGPT6 Core Media
              </h1>
              <p
                style={{
                  marginTop: "8px",
                  marginBottom: 0,
                  color: "#d9e4f5",
                  fontSize: "18px",
                }}
              >
                Pricing & Access Plans
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
              <a href="/videos" style={navLink}>Videos</a>
              <a href="/blogs" style={navLink}>Blogs</a>
              <a href="/media" style={navLink}>Media</a>
              <a href="/pricing" style={activeNav}>Pricing</a>
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
            Simple Plans for Public,
            <br />
            Creators, and Business Users
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
            Start free, upgrade affordably, and grow into a more powerful creator
            or corporate workflow inside the SSGPT6 media and automation platform.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Free
            </h3>
            <p
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "#0b1f3a",
                marginTop: "10px",
                marginBottom: "18px",
              }}
            >
              $0
            </p>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "17px" }}>
              Best for new public users who want to test the platform.
            </p>
            <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
              <li>Free account access</li>
              <li>Limited monthly usage</li>
              <li>Basic script generation</li>
              <li>Basic voice generation</li>
              <li>Limited video actions</li>
              <li>Standard queue</li>
            </ul>
            <a
              href="/app/dashboard"
              style={{
                display: "inline-block",
                marginTop: "16px",
                backgroundColor: "#0b1f3a",
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Start Free
            </a>
          </div>

          <div
            style={{
              ...card,
              border: "2px solid #c9a227",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#c9a227",
                color: "#0b1f3a",
                padding: "6px 12px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "13px",
                marginBottom: "14px",
              }}
            >
              Best Value
            </div>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Starter
            </h3>
            <p
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "#0b1f3a",
                marginTop: "10px",
                marginBottom: "18px",
              }}
            >
              $5<span style={{ fontSize: "18px", fontWeight: 600 }}>/month</span>
            </p>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "17px" }}>
              Low-cost plan for regular creators and public subscribers.
            </p>
            <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
              <li>More monthly credits</li>
              <li>More scripts and voiceovers</li>
              <li>More video creation access</li>
              <li>Downloads enabled</li>
              <li>Priority over free users</li>
              <li>Better creator workflow</li>
            </ul>
            <a
              href="/app/billing"
              style={{
                display: "inline-block",
                marginTop: "16px",
                backgroundColor: "#c9a227",
                color: "#0b1f3a",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Choose Starter
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Pro
            </h3>
            <p
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "#0b1f3a",
                marginTop: "10px",
                marginBottom: "18px",
              }}
            >
              $15<span style={{ fontSize: "18px", fontWeight: 600 }}>/month</span>
            </p>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "17px" }}>
              For heavier creator use and stronger production workflows.
            </p>
            <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
              <li>Higher limits</li>
              <li>Longer video jobs</li>
              <li>More storage</li>
              <li>Faster queue</li>
              <li>Expanded production tools</li>
              <li>Advanced creator access</li>
            </ul>
            <a
              href="/app/billing"
              style={{
                display: "inline-block",
                marginTop: "16px",
                backgroundColor: "#0b1f3a",
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Choose Pro
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Business
            </h3>
            <p
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "#0b1f3a",
                marginTop: "10px",
                marginBottom: "18px",
              }}
            >
              Custom
            </p>
            <p style={{ color: "#4b5563", lineHeight: "1.8", fontSize: "17px" }}>
              Built for business users, company teams, and client portals.
            </p>
            <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
              <li>Private company access</li>
              <li>Document portal</li>
              <li>Admin-managed users</li>
              <li>Team workflows</li>
              <li>Private media library</li>
              <li>Corporate support</li>
            </ul>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: "16px",
                backgroundColor: "#0b1f3a",
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}