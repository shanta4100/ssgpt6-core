import Footer from "../footer";

export default function PricingPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const smallCard = {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 10px 24px rgba(11, 31, 58, 0.08)",
    border: "1px solid #d6e2f2",
  } as const;

  const button = {
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
          background: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "40px 20px 80px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #081a36, #0b2347)",
              color: "#ffffff",
              borderRadius: "28px",
              padding: "32px",
              marginBottom: "24px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "42px" }}>Pricing</h1>
            <p style={{ marginTop: "12px", lineHeight: "1.8", color: "#d9e4f5" }}>
              Affordable access for general users, creators, and future automation
              subscribers inside SSGPT6 Core.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Free</h2>
              <p style={{ fontSize: "34px", fontWeight: 800, margin: "8px 0", color: "#0b1f3a" }}>
                $0
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Public browsing access for selected pages, company information,
                media overview, and general platform discovery.
              </p>
              <a href="/contact" style={button}>Get Started</a>
            </div>

            <div
              style={{
                ...card,
                border: "2px solid #c9a227",
              }}
            >
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Core Member</h2>
              <p style={{ fontSize: "34px", fontWeight: 800, margin: "8px 0", color: "#0b1f3a" }}>
                $5/mo
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Low-cost member access for future creator tools, media features,
                content services, and limited platform usage.
              </p>
              <a href="/contact" style={button}>Choose Core Member</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Admin / Founder</h2>
              <p style={{ fontSize: "34px", fontWeight: 800, margin: "8px 0", color: "#0b1f3a" }}>
                Internal
              </p>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Reserved for founder control, publishing management, automation
                systems, dashboard access, and internal operations.
              </p>
              <a href="/admin" style={button}>Open Admin</a>
            </div>
          </div>

          <div style={{ ...card, marginBottom: "24px" }}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              What’s Included
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: "22px" }}>
              SSGPT6 Core is more than one tool. It is a connected media and
              automation platform. These services can be included across free,
              member, and internal levels depending on access permissions.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Podcast</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Audio content, featured episodes, interviews, and voice-based media access.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Blogs</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Articles, editorial posts, founder notes, updates, and knowledge publishing.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Newsletter</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Recurring announcements, subscriber communication, and digest content.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Media Hub</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Central access point for content navigation, organization, and discovery.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Webinar</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Educational sessions, live presentation access, and future virtual events.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Company Releases</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Official updates, launch notes, statements, and platform communications.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Video Library</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Featured videos, media playback, and future automated video publishing.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Tools & Automation</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Future creator tools, automation systems, workflow control, and member features.
                </p>
              </div>
            </div>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Future Add-Ons
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: "18px" }}>
              These can be added later as premium options without changing the core pricing model.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Advanced Video Creation</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Automated video generation, branded production, and premium publishing workflows.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Premium Media Connectors</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Future integrations with external music, streaming, and content services.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Creator Workspace</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Expanded dashboards, upload workflows, scheduling, and content operations tools.
                </p>
              </div>

              <div style={smallCard}>
                <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>AI Sleeping Agent Controls</h3>
                <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
                  Future intelligent automation for publishing, monitoring, and platform orchestration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}