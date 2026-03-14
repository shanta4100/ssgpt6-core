export default function AboutPage() {
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
            About SSGPT6 Core
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
            SSGPT6 Core is an intelligent digital access platform built around
            practical AI, secure infrastructure, cloud monitoring, and founder-led
            control. It is designed to grow into a clean, stable, and expandable
            system for automation, governance, and future platform services.
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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
              Mission
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Build a trustworthy digital platform where AI tools, secure systems,
              and practical workflows come together in a simple and usable way.
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
              Vision
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Grow SSGPT6 Core into a strong foundation for automation,
              monitoring, governance, and future intelligent services across
              multiple connected systems.
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
              Core Focus
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              The platform focuses on AI automation, secure deployment structure,
              cloud health visibility, developer integration, and clean founder
              control.
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
            Platform Summary
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: 0,
            }}
          >
            SSGPT6 Core is structured as a founder-led platform with a strong
            emphasis on clarity, reliability, and future expansion. The design
            direction combines a professional public-facing experience with an
            internal system mindset, making it suitable for dashboards, tools,
            intelligent workflows, and platform services.
          </p>

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: 0,
            }}
          >
            This project is intended to support practical AI usage rather than
            abstract ideas alone. It aims to provide a stable digital base for
            real operations, secure infrastructure, and scalable future growth.
          </p>
        </div>
      </section>
    </main>
  );
}