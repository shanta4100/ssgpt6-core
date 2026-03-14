import Footer from "../footer";

export default function ContactPage() {
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
                  Contact & Support
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
                <a href="/tools" style={navLink}>Tools</a>
                <a href="/about" style={navLink}>About</a>
                <a href="/contact" style={activeNav}>Contact</a>
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
              Contact SSGPT6 Core
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
              Reach the platform for support, business inquiries, media requests,
              partnership discussions, and future company coordination under
              GNAIAAAC LLC.
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
                Support
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                For platform questions, page issues, media access, or general
                support inquiries.
              </p>
              <p
                style={{
                  color: "#0b1f3a",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                ssgpt6@aol.com
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Business
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                For partnership opportunities, company communication, and business
                collaboration requests.
              </p>
              <p
                style={{
                  color: "#0b1f3a",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                GNAIAAAC LLC
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "28px" }}>
                Founder
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Founder-led project direction, long-term vision, and executive
                oversight for the SSGPT6 Core platform.
              </p>
              <p
                style={{
                  color: "#0b1f3a",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                Arifur Rahman Shanta
              </p>
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
              Contact Summary
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              This page serves as the public contact layer for SSGPT6 Core. It can
              later grow into a full support center with forms, ticketing, admin
              routing, partner contact paths, and client-specific communication
              workflows.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/media" style={button}>
                Open Media Hub
              </a>
              <a href="/pricing" style={button}>
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}