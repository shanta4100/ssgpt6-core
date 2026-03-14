import Footer from "../footer";

export default function MediaPage() {
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
                  Media Hub
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
                <a href="/media" style={activeNav}>Media</a>
                <a href="/videos" style={navLink}>Videos</a>
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
              Central media access
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
              Explore the SSGPT6 Core content network across podcast, blogs,
              newsletter, webinars, company releases, videos, and future public
              media distribution systems.
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
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Podcast
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Voice content, interviews, discussions, and future audio channel
                distribution.
              </p>
              <a href="/podcast" style={button}>
                Open Podcast
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Blogs
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Editorial posts, founder writing, company insights, and platform
                updates.
              </p>
              <a href="/blogs" style={button}>
                Open Blogs
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Newsletter
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Subscriber communication, scheduled updates, and audience growth
                tools.
              </p>
              <a href="/newsletter" style={button}>
                Open Newsletter
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Webinar
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Live sessions, events, guided presentations, and future learning
                broadcasts.
              </p>
              <a href="/webinar" style={button}>
                Open Webinar
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Company Releases
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Official announcements, launch notices, press-style updates, and
                public statements.
              </p>
              <a href="/releases" style={button}>
                Open Releases
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Video Library
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Featured video access, platform media, and future automated video
                publishing.
              </p>
              <a href="/videos" style={button}>
                Open Videos
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
              Media operations note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This page is the central media directory for SSGPT6 Core. Later,
              it can connect to real video feeds, podcast players, newsletter
              signup forms, media connectors, admin publishing workflows, and
              automated content distribution.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}