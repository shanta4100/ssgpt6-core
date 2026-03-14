export default function NewsletterPage() {
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
                Newsletter Hub
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
              <a href="/newsletter" style={activeNav}>Newsletter</a>
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
            Newsletter Hub
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
            Publish regular updates, founder messages, company notes, media
            summaries, featured content, and platform highlights in one clean
            newsletter space.
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
            Featured Newsletter
          </h3>

          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            This section can be used for your latest public update, featured
            announcement, or weekly SSGPT6 Core media summary.
          </p>

          <div
            style={{
              backgroundColor: "#f8fbff",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid #d6e2f2",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                marginBottom: "10px",
                color: "#0b1f3a",
                fontSize: "24px",
              }}
            >
              Weekly Platform Brief
            </h4>
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
                color: "#42546b",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Use this area for your latest weekly message, new release
              highlights, media update, or company communication.
            </p>
          </div>
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
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Weekly Updates</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Send regular updates to your audience with featured media,
              product notes, and founder insights.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Release Notes</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Share recent changes, platform launches, business notices, and
              media publication summaries.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Audience Mailing</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Organize subscriber-facing communication for your growing public
              audience and business readers.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Automation Ready</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              This area can later connect with automatic newsletter workflows,
              scheduled distribution, and publishing logic.
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
            Newsletter Operations
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            This page can later be upgraded into a full mailing and publishing
            center with subscriber forms, archive issues, campaign controls,
            automation schedules, and audience segmentation.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/media" style={button}>
              Open Media Page
            </a>
            <a href="/blogs" style={button}>
              Open Blogs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}