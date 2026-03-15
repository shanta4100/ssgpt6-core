import Footer from "../footer";

export default function BlogsPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 20px 80px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #081a36, #0b2347)",
              color: "#ffffff",
              borderRadius: "28px",
              padding: "32px",
              marginBottom: "24px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "42px" }}>Blogs</h1>
            <p style={{ marginTop: "12px", lineHeight: "1.8", color: "#d9e4f5" }}>
              Read founder updates, platform articles, editorial posts, automation insights,
              and SSGPT6 Core knowledge content.
            </p>
            <a href="/media" style={button}>Back to Media Hub</a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <article style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Founder Update</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Platform direction, roadmap planning, infrastructure priorities, and expansion
                strategy under GNAIAAAC LLC.
              </p>
            </article>

            <article style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Automation Journal</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                AI sleeping agent concepts, automated publishing, monitoring systems, and self-operated workflows.
              </p>
            </article>

            <article style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Media Notes</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Articles connected to podcasting, blog publishing, video production, webinars, and digital distribution.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}