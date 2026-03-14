import Footer from "./footer";

export default function HomePage() {
  const navLink = {
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: 600,
  } as const;

  const buttonPrimary = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const buttonSecondary = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.18)",
  } as const;

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const mediaCard = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.08)",
    border: "1px solid #d6e2f2",
  } as const;

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #081a36 0%, #0b2347 38%, #f4f7fb 38%, #f4f7fb 100%)",
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
          <div style={{ color: "#ffffff", paddingBottom: "44px" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "34px",
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
                  Intelligent Digital Access Platform
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
                <a href="/about" style={navLink}>About</a>
                <a href="/contact" style={navLink}>Contact</a>
                <a href="/dashboard" style={navLink}>Dashboard</a>
              </nav>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    display: "inline-block",
                    margin: 0,
                    marginBottom: "16px",
                    backgroundColor: "rgba(201, 162, 39, 0.18)",
                    color: "#f4d87a",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                  }}
                >
                  Media Hub • Automation • Founder Platform
                </p>

                <h2
                  style={{
                    fontSize: "60px",
                    lineHeight: "1.04",
                    margin: 0,
                    fontWeight: 800,
                    letterSpacing: "-1.2px",
                  }}
                >
                  Build, publish, and manage intelligent media systems
                </h2>

                <p
                  style={{
                    marginTop: "18px",
                    fontSize: "20px",
                    lineHeight: "1.8",
                    color: "#d9e4f5",
                    maxWidth: "760px",
                  }}
                >
                  SSGPT6 Core brings together videos, blogs, podcasts,
                  newsletters, webinars, company releases, platform tools, and
                  future AI sleeping-agent automation in one structured digital
                  environment under GNAIAAAC LLC.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    flexWrap: "wrap",
                    marginTop: "26px",
                  }}
                >
                  <a href="/media" style={buttonPrimary}>
                    Open Media Hub
                  </a>
                  <a href="/pricing" style={buttonSecondary}>
                    View Pricing
                  </a>
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                  borderRadius: "28px",
                  padding: "18px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
                }}
              >
                <img
                  src="/IMG_6460.png"
                  alt="SSGPT6 Core logo"
                  style={{
                    width: "100%",
                    borderRadius: "22px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginBottom: "24px",
            }}
          >
            <div style={card}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Platform Type
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Active
              </h3>
            </div>

            <div style={card}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Main Content Areas
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                7+
              </h3>
            </div>

            <div style={card}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                User Access
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Free + $5
              </h3>
            </div>

            <div style={card}>
              <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
                Founder Control
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#0b1f3a", fontSize: "28px" }}>
                Ready
              </h3>
            </div>
          </div>

          <div style={{ ...card, marginBottom: "24px" }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "32px",
              }}
            >
              Featured video
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Use this section for your main company video, founder message,
              platform trailer, or automated media presentation on the homepage.
            </p>

            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#0b1f3a",
              }}
            >
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  display: "block",
                }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Podcast
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Audio programming, interviews, voice content, and future
                channel syndication.
              </p>
              <a href="/podcast" style={buttonPrimary}>
                Open Podcast
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Blogs
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles, editorial writing, founder updates, insights, and
                public posts.
              </p>
              <a href="/blogs" style={buttonPrimary}>
                Open Blogs
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Newsletter
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Subscriber communication, platform announcements, and routine
                publishing.
              </p>
              <a href="/newsletter" style={buttonPrimary}>
                Open Newsletter
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Media
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Central access point for content libraries, distribution, and
                media navigation.
              </p>
              <a href="/media" style={buttonPrimary}>
                Open Media
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Webinar
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Educational sessions, live presentations, and future event
                broadcasts.
              </p>
              <a href="/webinar" style={buttonPrimary}>
                Open Webinar
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Company Releases
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Official statements, updates, launch notes, and structured
                company communication.
              </p>
              <a href="/releases" style={buttonPrimary}>
                Open Releases
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Video Library
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Watch platform videos, brand media, featured clips, and future
                automated productions.
              </p>
              <a href="/videos" style={buttonPrimary}>
                Open Videos
              </a>
            </div>

            <div style={mediaCard}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Founder Dashboard
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Internal overview for platform organization, operations, and
                future AI sleeping-agent control.
              </p>
              <a href="/dashboard" style={buttonPrimary}>
                Open Dashboard
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
              Home page note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This homepage is now structured as a clean media hub around your
              current SSGPT6 Core base. Later you can connect real video feeds,
              blog data, newsletter signup, podcast platforms, user login,
              billing, and protected admin publishing tools.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}