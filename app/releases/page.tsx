import Footer from "../footer";

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
              Publish official company statements, product notices, platform
              milestones, public announcements, strategic updates, and formal
              business communications.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Product Launches
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Announce new platform features, product launches, and media hub
                expansions.
              </p>
              <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                View Releases →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Business Statements
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Share formal notices, founder communications, company summaries,
                and public-facing statements.
              </p>
              <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                View Releases →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Media Announcements
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Publish media updates, content rollouts, podcast launches, and
                featured programming notices.
              </p>
              <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                View Releases →
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Strategic Updates
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Communicate growth plans, platform direction, operational
                milestones, and structured future goals.
              </p>
              <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
                View Releases →
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
              Releases Operations
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              This page can later become a true company newsroom with dated press
              releases, downloadable statements, media kits, archive filtering,
              and publishing workflows managed from the admin side.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/blogs" style={button}>
                Open Blogs
              </a>
              <a href="/contact" style={button}>
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}