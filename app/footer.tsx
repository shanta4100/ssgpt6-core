export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        backgroundColor: "#081a36",
        color: "#d9e4f5",
        padding: "28px 20px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "22px",
              color: "#ffffff",
            }}
          >
            SSGPT6 Core
          </h3>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            Intelligent Digital Access Platform · GNAIAAAC LLC
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Home
          </a>
          <a href="/media" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Media
          </a>
          <a href="/videos" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Videos
          </a>
          <a href="/blogs" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Blogs
          </a>
          <a href="/podcast" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Podcast
          </a>
          <a href="/contact" style={{ color: "#d9e4f5", textDecoration: "none" }}>
            Contact
          </a>
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#9fb2cc",
          }}
        >
          © 2026 SSGPT6 Core
        </div>
      </div>
    </footer>
  );
}