export default function HomePage() {
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

  const goldButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const whiteButton = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const card = {
    backgroundColor: "#f1f6fd",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.12)",
    border: "1px solid #d6e2f2",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 58%, #e8eef7 58%, #e8eef7 100%)",
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
        <div
          style={{
            color: "#ffffff",
            paddingTop: "10px",
            paddingBottom: "42px",
          }}
        >
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
              <h1
                style={{
                  fontSize: "32px",
                  margin: 0,
                  fontWeight: 800,
                }}
              >
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

            <nav
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a href="/" style={activeNav}>Home</a>
              <a href="/tools" style={navLink}>Tools</a>
              <a href="/about" style={navLink}>About</a>
              <a href="/contact" style={navLink}>Contact</a>
              <a href="/dashboard" style={navLink}>Dashboard</a>
            </nav>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "62px",
                  lineHeight: "1.02",
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                Cosmic AI.
                <br />
                Secure Network.
                <br />
                Human-Centered Future.
              </h2>

              <p
                style={{
                  marginTop: "22px",
                  fontSize: "20px",
                  lineHeight: "1.85",
                  color: "#d9e4f5",
                  maxWidth: "760px",
                }}
              >
                SSGPT6 Core is a founder-led digital platform for AI automation,
                secure infrastructure, cloud visibility, intelligent system
                control, and future-ready ecosystem services. Built under
                GNAIAAAC LLC, it connects technology, wellbeing, environment,
                and human-centered progress through a unified intelligent core.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "28px",
                }}
              >
                <a href="/dashboard" style={goldButton}>
                  Open Dashboard
                </a>

                <a href="/tools" style={whiteButton}>
                  View Tools
                </a>
              </div>
            </div>

            <div>
              <img
                src="/IMG_6460.png"
                alt="SSGPT6 Core Hero Logo"
                style={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "28px",
              }}
            >
              Tools
            </h3>
            <p
              style={{
                color: "#42546b",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              View the core systems that support automation, infrastructure,
              monitoring, and intelligent platform growth.
            </p>
            <a href="/tools" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Tools →
            </a>
          </div>

          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "28px",
              }}
            >
              About
            </h3>
            <p
              style={{
                color: "#42546b",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Learn the mission, vision, founder identity, and long-term system
              direction of SSGPT6 Core.
            </p>
            <a href="/about" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to About →
            </a>
          </div>

          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "28px",
              }}
            >
              Contact
            </h3>
            <p
              style={{
                color: "#42546b",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Reach the platform for support, business coordination, and future
              collaboration under GNAIAAAC LLC.
            </p>
            <a href="/contact" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Contact →
            </a>
          </div>

          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "28px",
              }}
            >
              Dashboard
            </h3>
            <p
              style={{
                color: "#42546b",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Open the founder-facing command layer for visibility, structure,
              and future platform control.
            </p>
            <a href="/dashboard" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Dashboard →
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "26px",
            ...card,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "14px",
              color: "#0b1f3a",
              fontSize: "30px",
            }}
          >
            Core Vision
          </h3>

          <p
            style={{
              color: "#42546b",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            SSGPT6 Core is designed as a secure, scalable, and intelligent
            digital foundation that connects AI automation, system monitoring,
            environmental responsibility, human wellbeing, and future aerospace
            and energy innovation into one unified platform vision.
          </p>
        </div>
      </section>
    </main>
  );
}