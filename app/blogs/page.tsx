import Footer from "../footer";

export default function BlogsPage() {
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
                  Blog Library
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
                <a href="/media" style={navLink}>Media</a>
                <a href="/videos" style={navLink}>Videos</a>
                <a href="/blogs" style={activeNav}>Blogs</a>
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
              Blog library
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
              Read founder editorials, company insights, platform updates,
              thought leadership posts, media commentary, and future knowledge
              publishing across SSGPT6 Core.
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
                Founder Editorial
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Personal vision, direction, strategic thinking, and long-form
                commentary from the founder side of the platform.
              </p>
              <a href="/about" style={button}>
                Read More
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Company Updates
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles covering platform milestones, public announcements, and
                progress updates.
              </p>
              <a href="/releases" style={button}>
                View Updates
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Media Insights
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Posts connected to content systems, media production, publishing
                workflow, and audience growth.
              </p>
              <a href="/media" style={button}>
                Open Media
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Future Systems
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles about AI automation, sleeping-agent workflows,
                intelligent tools, and next-generation digital operations.
              </p>
              <a href="/tools" style={button}>
                Open Tools
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
              Blog publishing note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This page is ready to become a full blog hub later with categories,
              post archives, featured articles, author sections, and structured
              publishing workflows managed from your platform.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}