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
                Streaming Connectors & Media Access
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
              <a href="/media" style={activeNav}>Media</a>
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
            Media Connectors
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
            SSGPT6 Core can act as a clean media hub that directs users to
            approved listening and viewing destinations while keeping your
            brand, customer service, and content organization in one place.
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
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Apple Music
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Direct your audience to Apple Music using approved listening or
              promotional links.
            </p>
            <a href="#" style={button}>
              Open Apple Music
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Spotify
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Connect listeners to Spotify playlists, episodes, or public audio
              destinations.
            </p>
            <a href="#" style={button}>
              Open Spotify
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Amazon Music
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Send users to Amazon Music content and future partner-approved
              media channels.
            </p>
            <a href="#" style={button}>
              Open Amazon Music
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Netflix
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Provide viewing destination links and future media availability
              references where appropriate.
            </p>
            <a href="#" style={button}>
              Open Netflix
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              YouTube
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Route public traffic to your video channel, releases, clips, and
              featured programming.
            </p>
            <a href="#" style={button}>
              Open YouTube
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Podcast Platforms
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Group podcast access in one section and connect users to supported
              listening destinations.
            </p>
            <a href="/podcast" style={button}>
              Open Podcast Hub
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
            Media Operations Note
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: 0,
            }}
          >
            This page is the public media connector layer. It can later be
            upgraded with affiliate links, approved platform connectors,
            featured releases, account-based media access, and business-managed
            content routing from your admin area.
          </p>
        </div>
      </section>
    </main>
  );
}