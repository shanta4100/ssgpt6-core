export default function DashboardPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #081a36 0%, #0b2347 100%)",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "32px",
            marginBottom: "24px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "40px", fontWeight: 800 }}>
            Creator Dashboard
          </h1>
          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#d9e4f5",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "820px",
            }}
          >
            This is the dashboard area for scripts, voice, video, downloads,
            credits, and subscription access.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Plan</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Current plan: Free / Starter / Pro
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Credits</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Track monthly credits for scripts, voice, and video generation.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Library</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Access your generated content, saved drafts, and downloads.
            </p>
          </div>

          <div style={card}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Billing</h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
              Upgrade, renew, or manage your monthly subscription plan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}