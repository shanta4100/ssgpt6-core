import Footer from "../app/footer";

export default function HomePage() {
  const navLink = {
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: 600,
  } as const;

  const activeButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const secondButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
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
          <div style={{ color: "#ffffff", paddingBottom: "42px" }}>
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
                <a href="/videos" style={navLink}>Videos</a>
                <a href="/blogs" style={navLink}>Blogs</a>
                <a href="/podcast" style={navLink}>Podcast</a>
                <a href="/media" style={navLink}>Media</a>
                <a href="/dashboard" style={navLink}>Dashboard</a>
              </nav>
            </div>

            <h2
              style={{
                fontSize: "58px",
                lineHeight: "1.05",
                margin: 0,
                fontWeight: 800,
                letterSpacing: "-1px",
                maxWidth: "900px",
              }}
            >
              Media, automation, publishing, and digital platform access in one
              modern SSGPT6 Core system
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
              Build your public media presence, manage company releases, organize
              videos, podcasts, newsletters, and future automation workflows from
              one connected platform.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <a href="/media" style={activeButton}>
                Open Media Hub
              </a>

              <a href="/dashboard" style={secondButton}>
                Open Dashboard
              </a>
            </div>
          </div>

          <div
            style={{
              ...card,
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Featured Video
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Upload your homepage featured video as:
              <strong> public/home-featured-video.mp4</strong>
            </p>

            <video
              controls
              playsInline
              style={{
                width: "100%",
                borderRadius: "18px",
                backgroundColor: "#0b1f3a",
              }}
            >
              <source src="/home-featured-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Podcast</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Founder audio, public commentary, AI voice episodes, and spoken
                media programming.
              </p>
              <a href="/podcast" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Podcast →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Blogs</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Editorials, platform updates, long-form thought pieces, and media
                knowledge posts.
              </p>
              <a href="/blogs" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Blogs →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Newsletter</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Weekly platform summaries, subscriber communication, and release
                highlights.
              </p>
              <a href="/newsletter" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Newsletter →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Webinar</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Live sessions, future replays, internal learning, and structured
                event publishing.
              </p>
              <a href="/webinar" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Webinar →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Company Releases</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Official announcements, milestone updates, public company notices,
                and brand statements.
              </p>
              <a href="/releases" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Releases →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Video Library</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Showcase featured productions, training media, creator outputs,
                and public video assets.
              </p>
              <a href="/videos" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                Open Videos →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}