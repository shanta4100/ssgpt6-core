export default function NotFoundPage() {
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

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 55%, #e8eef7 55%, #e8eef7 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "60px 20px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #081a36 0%, #0b2347 100%)",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "40px 28px",
            boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#c9a227",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            SSGPT6 CORE
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1",
              margin: "16px 0 10px 0",
              fontWeight: 800,
            }}
          >
            404
          </h1>

          <h2
            style={{
              fontSize: "34px",
              margin: "0 0 16px 0",
              fontWeight: 800,
            }}
          >
            Page Not Found
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "720px",
              color: "#d9e4f5",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            The page you are looking for does not exist or may have been moved.
            Return to the homepage or open the dashboard to continue exploring
            the SSGPT6 Core platform.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <a href="/" style={button}>
              Back Home
            </a>

            <a href="/dashboard" style={secondButton}>
              Open Dashboard
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            backgroundColor: "#f1f6fd",
            borderRadius: "22px",
            padding: "28px",
            boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            border: "1px solid #d6e2f2",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#0b1f3a",
              fontSize: "28px",
            }}
          >
            Helpful Links
          </h3>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "16px",
            }}
          >
            <a href="/videos" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Videos
            </a>
            <a href="/blogs" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Blogs
            </a>
            <a href="/podcast" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Podcast
            </a>
            <a href="/newsletter" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Newsletter
            </a>
            <a href="/media" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Media
            </a>
            <a href="/pricing" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}