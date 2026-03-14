export default function HomePage() {
  const navStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "16px"
  };

  const buttonPrimary = {
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    padding: "14px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700
  };

  const buttonSecondary = {
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    padding: "14px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0b1f3a",
        color: "#ffffff"
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 28px"
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>SSGPT6 Core</h2>
          <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
            Intelligent Digital Access Platform
          </p>
        </div>

        <nav style={{ display: "flex", gap: "18px" }}>
          <a href="/tools" style={navStyle}>Tools</a>
          <a href="/dashboard" style={navStyle}>Dashboard</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "60px 28px",
          maxWidth: "1000px"
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}
        >
          Practical AI,<br/>
          Secure Infrastructure,<br/>
          Clean Control
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "640px",
            opacity: 0.85,
            lineHeight: "1.6"
          }}
        >
          SSGPT6 Core is a founder-led platform for AI automation,
          cloud monitoring, governance, and developer integration.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "14px" }}>
          <a href="/dashboard" style={buttonPrimary}>
            Open Dashboard
          </a>

          <a href="/tools" style={buttonSecondary}>
            View Tools
          </a>
        </div>
      </section>

      {/* IMAGE */}
      <section
        style={{
          padding: "40px 28px"
        }}
      >
        <img
          src="/icon-512.png"
          alt="SSGPT6"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            padding: "16px"
          }}
        />
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          opacity: 0.7,
          fontSize: "14px"
        }}
      >
        © SSGPT6 Core — Founder: Arifur Rahman Shanta
      </footer>
    </main>
  );
}