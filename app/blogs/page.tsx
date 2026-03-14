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
                Blogs
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
              <a href="/blogs" style={activeNav}>Blogs</a>
              <a href="/podcast" style={navLink}>Podcast</a>
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
            Blog Library
          </h2>

          <p
            style={{
              marginTop: "18px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d9e4f5",
              maxWidth: "820px",
            }}
          >
            Explore articles, founder editorials, AI platform insights, media
            releases, technology updates, and knowledge-driven content from
            SSGPT6 Core.
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
              Founder Editorial
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Founder reflections, long-term vision, platform strategy, and
              public thought leadership.
            </p>
            <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Read Articles →
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              AI Automation
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Articles on automation systems, intelligent workflows, media
              production logic, and future AI tooling.
            </p>
            <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Read Articles →
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Media & Releases
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Blog-style coverage of updates, company releases, public platform
              messaging, and media highlights.
            </p>
            <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Read Articles →
            </a>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
              Future Systems
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Discussions about platform expansion, zero-carbon innovation,
              infrastructure ideas, and future digital systems.
            </p>
            <a href="#" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Read Articles →
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
            Blog Publishing Notes
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.8",
              marginBottom: 0,
            }}
          >
            This page can later be upgraded into a real blog system with article
            cards, categories, search, featured posts, newsletters, and media
            releases. For now, it acts as the structured blog hub for SSGPT6
            Core Media.
          </p>
        </div>
      </section>
    </main>
  );
}