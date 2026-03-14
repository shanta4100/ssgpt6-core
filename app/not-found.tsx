import Footer from "./footer";

export default function NotFound() {
  const button = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const secondButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
    maxWidth: "760px",
    margin: "0 auto",
  } as const;

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #081a36 0%, #0b2347 42%, #f4f7fb 42%, #f4f7fb 100%)",
          fontFamily: "Arial, sans-serif",
          padding: "40px 20px 80px",
        }}
      >
        <section
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              paddingBottom: "40px",
              textAlign: "center",
            }}
          >
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
              Intelligent Digital Access Platform
            </p>
          </div>

          <div style={card}>
            <h2
              style={{
                fontSize: "48px",
                lineHeight: "1.05",
                marginTop: 0,
                marginBottom: "16px",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "#0b1f3a",
              }}
            >
              Page not found
            </h2>

            <p
              style={{
                color: "#4b5563",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}
            >
              The page you are looking for is not available right now. Please go
              back to the homepage or open one of the main SSGPT6 Core sections.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "18px",
              }}
            >
              <a href="/" style={button}>
                Back Home
              </a>
              <a href="/media" style={secondButton}>
                Open Media
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                color: "#0b1f3a",
                fontWeight: 700,
              }}
            >
              <a href="/tools">Tools</a>
              <a href="/videos">Videos</a>
              <a href="/blogs">Blogs</a>
              <a href="/podcast">Podcast</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}