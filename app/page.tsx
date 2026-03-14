export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 55%, #f4f7fb 55%, #f4f7fb 100%)",
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
              <a
                href="/"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                }}
              >
                Home
              </a>

              <a
                href="/tools"
                style={{
                  color: "#0b1f3a",
                  textDecoration: "none",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#c9a227",
                  fontWeight: 700,
                }}
              >
                Tools
              </a>

              <a
                href="/about"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                }}
              >
                About
              </a>

              <a
                href="/contact"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                }}
              >
                Contact
              </a>

              <a
                href="/dashboard"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                }}
              >
                Dashboard
              </a>
            </nav>
          </div>

          <h2
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-1px",
              maxWidth: "780px",
            }}
          >
            Practical AI, Secure Infrastructure, Clean Control
          </h2>

          <p
            style={{
              marginTop: "22px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d9e4f5",
              maxWidth: "860px",
            }}
          >
            SSGPT6 Core is a founder-led platform for AI automation, cloud
            monitoring, governance, and developer integration. It is designed as
            a clean digital foundation for secure systems and future intelligent
            services.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <a
              href="/dashboard"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: "14px",
                backgroundColor: "#c9a227",
                color: "#0b1f3a",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Open Dashboard
            </a>

            <a
              href="/tools"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: "14px",
                backgroundColor: "#ffffff",
                color: "#0b1f3a",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Tools
            </a>
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
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
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
                color: "#4b5563",
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

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
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
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Learn the mission, vision, and structure behind the SSGPT6 Core
              platform and its long-term direction.
            </p>
            <a href="/about" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to About →
            </a>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
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
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Reach the platform for support, coordination, collaboration, and
              future development inquiries.
            </p>
            <a href="/contact" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Contact →
            </a>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
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
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Open the founder-facing internal dashboard for platform direction,
              visibility, and future control systems.
            </p>
            <a href="/dashboard" style={{ color: "#0b1f3a", fontWeight: 700 }}>
              Go to Dashboard →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}