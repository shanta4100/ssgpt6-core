export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #07111d 0%, #0c1d31 100%)",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <section
          style={{
            padding: "28px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#9cc9ff",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            Founder Admin Panel
          </p>

          <h1 style={{ marginTop: "10px", marginBottom: "12px" }}>
            SSGPT6 Admin Dashboard
          </h1>

          <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
            Private founder area for internal records, project controls,
            protected notes, and admin-only navigation.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <a
            href="/admin/ssdi"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#ffffff",
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(140,190,255,0.20)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
              SSDI Tracker
            </h2>
            <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
              Founder-only internal recordkeeping, notes, evidence structure,
              and review page.
            </p>
          </a>

          <a
            href="/newsletter"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#ffffff",
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(140,190,255,0.20)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
              Newsletter
            </h2>
            <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
              Access newsletter signup flow and future mailing tools.
            </p>
          </a>

          <a
            href="/media"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#ffffff",
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(140,190,255,0.20)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
              Media Center
            </h2>
            <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
              Video, audio, podcast, webinar, and media page access.
            </p>
          </a>

          <a
            href="/pricing"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#ffffff",
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(140,190,255,0.20)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "10px", fontSize: "22px" }}>
              Pricing
            </h2>
            <p style={{ margin: 0, color: "#dbe7ff", lineHeight: 1.7 }}>
              View public pricing plans, membership structure, and service
              access.
            </p>
          </a>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Founder Notes</h2>
          <p style={{ color: "#dbe7ff", lineHeight: 1.8 }}>
            This dashboard is intended for private founder navigation and
            internal organization. Add authentication before treating this area
            as secure. Public deployment without login protection means anyone
            with the URL may reach the page.
          </p>
        </section>

        <section
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(140,190,255,0.20)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Quick Links</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <a
              href="/"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Back to Home
            </a>

            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(153,204,255,0.25)",
              }}
            >
              Contact
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}