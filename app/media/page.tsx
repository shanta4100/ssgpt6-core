import Footer from "../footer";

export default function MediaPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
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
            <h1 style={{ margin: 0, fontSize: "42px" }}>Media Hub</h1>
            <p style={{ marginTop: "12px", lineHeight: "1.8", color: "#d9e4f5" }}>
              Central access for podcast, blogs, newsletter, webinar, company releases,
              videos, and future media distribution inside SSGPT6 Core.
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
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Podcast</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Audio publishing, interviews, founder voice, and future episode distribution.
              </p>
              <a href="/podcast" style={button}>Open Podcast</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Blogs</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles, editorial posts, media commentary, founder updates, and knowledge publishing.
              </p>
              <a href="/blogs" style={button}>Open Blogs</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Newsletter</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Subscriber updates, recurring communication, audience messaging, and digest publishing.
              </p>
              <a href="/newsletter" style={button}>Open Newsletter</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Webinar</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Educational sessions, replay events, live presentations, and future learning broadcasts.
              </p>
              <a href="/webinar" style={button}>Open Webinar</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Company Releases</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Official announcements, milestone updates, launch notes, and structured public statements.
              </p>
              <a href="/releases" style={button}>Open Releases</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Video Library</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Featured videos, platform media, brand content, and future automated productions.
              </p>
              <a href="/videos" style={button}>Open Videos</a>
            </div>
          </div>

          <div style={{ ...card, marginTop: "24px" }}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Media note
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
              This page works as the central directory for SSGPT6 Core media. Later,
              it can connect to real uploads, embedded players, subscriber features,
              analytics, admin publishing controls, and external media connectors.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}