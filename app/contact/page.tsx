export default function ContactPage() {
  return (
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
          <h1
            style={{
              fontSize: "56px",
              lineHeight: "1.05",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            Contact SSGPT6 Core
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#d9e4f5",
              maxWidth: "860px",
            }}
          >
            Contact the platform for support, business inquiries, collaboration,
            and future development coordination.
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
              href="/"
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
              Back Home
            </a>

            <a
              href="/dashboard"
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
              Open Dashboard
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
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
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Support
            </h2>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginTop: 0,
              }}
            >
              For help with platform pages, deployment, navigation, and future
              features, use the contact channels below.
            </p>

            <p
              style={{
                marginBottom: 0,
                color: "#111827",
                fontSize: "17px",
                lineHeight: "1.9",
              }}
            >
              Email: <strong>ssgpt6@aol.com</strong>
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Business
            </h2>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginTop: 0,
              }}
            >
              Contact for partnerships, product inquiries, founder-led
              collaboration, and future system development opportunities.
            </p>

            <p
              style={{
                marginBottom: 0,
                color: "#111827",
                fontSize: "17px",
                lineHeight: "1.9",
              }}
            >
              Organization: <strong>GNAIAAAC LLC</strong>
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Founder
            </h2>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginTop: 0,
              }}
            >
              The SSGPT6 Core platform is built and directed by the founder as
              a long-term intelligent digital access system.
            </p>

            <p
              style={{
                marginBottom: 0,
                color: "#111827",
                fontSize: "17px",
                lineHeight: "1.9",
              }}
            >
              Founder: <strong>Arifur Rahman Shanta</strong>
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            backgroundColor: "#ffffff",
            borderRadius: "22px",
            padding: "30px",
            boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "18px",
              color: "#0b1f3a",
              fontSize: "34px",
            }}
          >
            Contact Summary
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
            }}
          >
            This page serves as the main contact layer for support, platform
            inquiries, and future business coordination. As the SSGPT6 Core
            system expands, this contact page can later be upgraded with forms,
            ticketing, and dedicated service channels.
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: 0,
            }}
          >
            For now, this provides a clean, professional public-facing contact
            destination that fits the platform design and founder-led structure.
          </p>
        </div>
      </section>
    </main>
  );
}