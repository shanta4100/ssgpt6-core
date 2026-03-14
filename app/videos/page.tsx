import Footer from "../footer";

export default function VideosPage() {
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
                  Video Library
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
                <a href="/videos" style={activeNav}>Videos</a>
                <a href="/blogs" style={navLink}>Blogs</a>
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
              Video Library
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
              Explore featured productions, automated media workflows, platform
              explainers, public releases, and future creator content generated
              through the SSGPT6 media ecosystem.
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
              Featured Library Video
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Upload your main video library file as:
              <strong> public/library-video.mp4</strong>
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
              <source src="/library-video.mp4" type="video/mp4" />
            </video>
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
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>AI News Videos</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Anchor-led platform news, AI-assisted media releases, and public
                information videos.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Creator Videos</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Generated video content, script-to-video outputs, and creator
                workflow productions.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Company Media</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Business releases, platform messaging, and official company video
                communications.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Training Videos</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Tutorials, how-to guides, dashboard walkthroughs, and future user
                onboarding materials.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}