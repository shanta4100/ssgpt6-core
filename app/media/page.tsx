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
            maxWidth: "1100px",
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
              Central access for podcast, blogs, newsletter, webinar, releases, and video
              publishing inside SSGPT6 Core.
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
              <h2 style={{ marginTop: 0 }}>Podcast</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Audio content, interviews, and voice-based programming.
              </p>
              <a href="/podcast" style={button}>Open Podcast</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0 }}>Blogs</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles, editorials, founder notes, and written updates.
              </p>
              <a href="/blogs" style={button}>Open Blogs</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0 }}>Newsletter</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Subscriber updates, digest communication, and regular publishing.
              </p>
              <a href="/newsletter" style={button}>Open Newsletter</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0 }}>Webinar</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Live sessions, event presentations, and educational broadcasts.
              </p>
              <a href="/webinar" style={button}>Open Webinar</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0 }}>Company Releases</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Official statements, launch notes, and structured company announcements.
              </p>
              <a href="/releases" style={button}>Open Releases</a>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0 }}>Video Library</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Featured videos, brand content, and future automated production outputs.
              </p>
              <a href="/videos" style={button}>Open Videos</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}