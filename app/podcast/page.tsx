import Footer from "../footer";

export default function PodcastPage() {
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
                  Podcast Hub
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
                <a href="/podcast" style={activeNav}>Podcast</a>
                <a href="/media" style={navLink}>Media</a>
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
              Podcast Hub
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
              Publish founder audio, AI commentary, interviews, guided episodes,
              public announcements, and future anchor-style spoken programming
              from one organized platform section.
            </p>
          </div>

          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Featured Podcast Episode
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Upload your featured podcast audio as:
              <strong> public/featured-podcast.mp3</strong>
            </p>

            <audio
              controls
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            >
              <source src="/featured-podcast.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginTop: "24px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Founder Voice</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Personal founder messages, leadership thoughts, and long-term
                platform vision episodes.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>AI Commentary</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                AI-assisted narration, topic analysis, and smart commentary
                generated from your media workflow.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Interviews</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Conversations, partner interviews, public discussions, and future
                guest episodes.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Platform Updates</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Podcast-style release notes, product updates, and official audio
                announcements.
              </p>
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
              Podcast Distribution
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              This section can later connect to podcast platforms, Apple Podcasts,
              Spotify podcast destinations, RSS feeds, and your media connector
              system.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/media" style={button}>
                Open Media Connectors
              </a>
              <a href="/videos" style={button}>
                Open Video Library
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}