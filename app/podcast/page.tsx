import Footer from "../footer";

export default function PodcastPage() {
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
            <h1 style={{ margin: 0, fontSize: "42px" }}>Podcast</h1>
            <p style={{ marginTop: "12px", lineHeight: "1.8", color: "#d9e4f5" }}>
              Listen to featured audio, founder commentary, interview episodes, and voice content.
            </p>
            <a href="/media" style={button}>Back to Media Hub</a>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Featured Episode</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Add your real MP3 later into the public folder at:
            </p>
            <pre
              style={{
                background: "#eef4fb",
                padding: "14px",
                borderRadius: "12px",
                overflowX: "auto",
              }}
            >
{`public/featured-podcast.mp3`}
            </pre>

            <audio controls style={{ width: "100%", marginTop: "14px" }}>
              <source src="/featured-podcast.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}