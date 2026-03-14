export default function HomePage() {
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

  const goldButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const whiteButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const card = {
    backgroundColor: "#f1f6fd",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.12)",
    border: "1px solid #d6e2f2",
  } as const;

  const sectionTitle = {
    marginTop: 0,
    marginBottom: "14px",
    color: "#0b1f3a",
    fontSize: "28px",
  } as const;

  const cardText = {
    color: "#42546b",
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "18px",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 58%, #e8eef7 58%, #e8eef7 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            paddingTop: "10px",
            paddingBottom: "42px",
          }}
        >
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
              <h1
                style={{
                  fontSize: "32px",
                  margin: 0,
                  fontWeight: 800,
                }}
              >
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
                Intelligent Digital Access Platform · GNAIAAAC LLC
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
              <a href="/" style={activeNav}>Home</a>
              <a href="/videos" style={navLink}>Videos</a>
              <a href="/blogs" style={navLink}>Blogs</a>
              <a href="/podcast" style={navLink}>Podcast</a>
              <a href="/newsletter" style={navLink}>Newsletter</a>
              <a href="/dashboard" style={navLink}>Dashboard</a>
            </nav>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "58px",
                  lineHeight: "1.02",
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                AI Media.
                <br />
                Automated Production.
                <br />
                Human-Centered Broadcast.
              </h2>

              <p
                style={{
                  marginTop: "22px",
                  fontSize: "20px",
                  lineHeight: "1.85",
                  color: "#d9e4f5",
                  maxWidth: "760px",
                }}
              >
                SSGPT6 Core is evolving into a media and intelligence company
                platform built for podcasting, blogs, newsletters, webinars,
                company releases, video production, and a future-ready content
                engine powered by automated AI systems, sleeping-agent workflow
                logic, and self-operated production support.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "28px",
                }}
              >
                <a href="/dashboard" style={goldButton}>
                  Open Dashboard
                </a>

                <a href="#featured-video" style={whiteButton}>
                  Watch Featured Video
                </a>
              </div>
            </div>

            <div>
              <img
                src="/IMG_6460.png"
                alt="SSGPT6 Core Hero Logo"
                style={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        <div
          id="featured-video"
          style={{
            ...card,
            marginBottom: "24px",
          }}
        >
          <h3 style={sectionTitle}>Featured Video</h3>
          <p style={cardText}>
            This homepage area is reserved for your primary media program. Use
            it for anchor-led presentations, AI-generated news updates, product
            walkthroughs, media announcements, or your core video creator
            project output.
          </p>

          <video
            controls
            playsInline
            style={{
              width: "100%",
              borderRadius: "18px",
              backgroundColor: "#0b1f3a",
              boxShadow: "0 10px 24px rgba(11, 31, 58, 0.15)",
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <p
            style={{
              marginTop: "16px",
              marginBottom: 0,
              color: "#42546b",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Upload your running homepage program as:
            <strong> public/hero-video.mp4</strong>
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={card}>
            <h3 style={sectionTitle}>Podcast</h3>
            <p style={cardText}>
              Audio programs, interviews, founder messages, AI commentary, and
              recurring thought leadership episodes.
            </p>
            <a href="/podcast" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Podcast →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Blogs</h3>
            <p style={cardText}>
              Editorial content, technical articles, product stories, founder
              insights, and platform writing.
            </p>
            <a href="/blogs" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Blogs →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Newsletter</h3>
            <p style={cardText}>
              Scheduled updates, platform highlights, company signals, and
              audience-facing recurring communication.
            </p>
            <a href="/newsletter" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Newsletter →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Media</h3>
            <p style={cardText}>
              Public-facing media center for featured content, brand assets,
              spotlight content, and platform storytelling.
            </p>
            <a href="/media" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Media →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Webinar</h3>
            <p style={cardText}>
              Live sessions, training broadcasts, educational streams, recorded
              classes, and event programming.
            </p>
            <a href="/webinar" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Webinar →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Company Releases</h3>
            <p style={cardText}>
              Official company updates, launch notes, release statements,
              business milestones, and public notices.
            </p>
            <a href="/releases" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Releases →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Video Library</h3>
            <p style={cardText}>
              Organized archive of videos, AI-generated productions, studio
              assets, explainers, and media episodes.
            </p>
            <a href="/videos" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Videos →
            </a>
          </div>

          <div style={card}>
            <h3 style={sectionTitle}>Automation Studio</h3>
            <p style={cardText}>
              Future home for script generation, content planning, scheduling,
              program switching, and self-operated media workflows.
            </p>
            <a href="/dashboard" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Open Studio →
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            ...card,
          }}
        >
          <h3 style={{ ...sectionTitle, fontSize: "30px" }}>Production Vision</h3>
          <p
            style={{
              color: "#42546b",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            The SSGPT6 Core media system is intended to support a professional
            AI-assisted content company model where production can expand from
            static pages into smart publishing, recurring programs, automated
            content generation, anchor-style presentation layers, and organized
            media operations.
          </p>
          <p
            style={{
              color: "#42546b",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Over time, this homepage can act as the command center for media,
            podcasting, newsletters, videos, webinar programming, business
            releases, and future self-managed content workflows.
          </p>
        </div>
      </section>
    </main>
  );
}