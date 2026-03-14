import Footer from "../footer";

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
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const primaryButton = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
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
                  Pricing Plans
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
                <a href="/pricing" style={activeNav}>Pricing</a>
                <a href="/contact" style={navLink}>Contact</a>
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
              Simple platform pricing
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
              Public users can start free with limited access, then upgrade for
              more media tools, automation features, and creator capacity.
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
                Free
              </h3>
              <p
                style={{
                  color: "#0b1f3a",
                  fontSize: "34px",
                  fontWeight: 800,
                  margin: "10px 0",
                }}
              >
                $0
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Limited public access for exploring core media areas and platform
                experience.
              </p>
              <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
                <li>Basic public access</li>
                <li>Limited usage</li>
                <li>View selected media</li>
                <li>Upgrade later</li>
              </ul>
              <a href="/contact" style={primaryButton}>
                Start Free
              </a>
            </div>

            <div
              style={{
                ...card,
                border: "2px solid #c9a227",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Standard
              </h3>
              <p
                style={{
                  color: "#0b1f3a",
                  fontSize: "34px",
                  fontWeight: 800,
                  margin: "10px 0",
                }}
              >
                $5<span style={{ fontSize: "18px", fontWeight: 600 }}>/month</span>
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Affordable public subscription for regular users who need more
                access and expanded platform use.
              </p>
              <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
                <li>More creator access</li>
                <li>More time and usage</li>
                <li>Expanded media tools</li>
                <li>Better customer support</li>
              </ul>
              <a href="/contact" style={primaryButton}>
                Choose Standard
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Admin / Internal
              </h3>
              <p
                style={{
                  color: "#0b1f3a",
                  fontSize: "34px",
                  fontWeight: 800,
                  margin: "10px 0",
                }}
              >
                Managed
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Reserved for internal control, founder operations, publishing,
                approvals, and future protected admin workflows.
              </p>
              <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px" }}>
                <li>Admin dashboard</li>
                <li>Content management</li>
                <li>Publishing controls</li>
                <li>Protected access</li>
              </ul>
              <a href="/dashboard" style={primaryButton}>
                Open Admin
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
              Pricing Note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This pricing structure keeps SSGPT6 Core affordable for general
              public users while protecting internal admin controls. Later, this
              page can connect to real billing, subscriptions, time limits, and
              member access rules.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}