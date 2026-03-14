export default function ReleasesPage() {
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
                Company Releases
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
              <a href="/releases" style={activeNav}>Releases</a>
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
            Company Releases
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
            Publish official company announcements, platform updates, release
            notes, public statements, milestone reports, and brand news from
            SSGPT6 Core and GNAIAAAC LLC.
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
            Featured Release
          </h3>

          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            Use this section for your latest official release, launch note,
            founder statement, media announcement, or company milestone.
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
              Latest Platform Announcement
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
              This area can highlight your newest release, official statement,
              company update, or milestone announcement.
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
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Product Updates</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Release notes, feature launches, platform improvements, and system
              upgrade announcements.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Company Notices</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Formal statements, business notices, leadership updates, and
              operational announcements.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Media Releases</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Press-style updates, public releases, and audience-facing
              communications for news and media.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Milestones</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Publish project achievements, growth updates, product phases, and
              future roadmap signals.
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
            Release Operations
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: "18px",
            }}
          >
            This page can later support release archives, press-kit links,
            structured announcements, scheduled publishing, and admin-managed
            company communications.
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