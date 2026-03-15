export default function PaymentInnovationPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #07111d 0%, #0f2340 100%)",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <section style={hero}>
          <p style={eyebrow}>SSGPT6-CORE Payment Innovation</p>
          <h1 style={title}>Secure Payment Innovation Board</h1>
          <p style={subtitle}>
            Trusted checkout, pricing visibility, member upgrade pathways, reminders,
            and customer appreciation flows in one premium system.
          </p>
        </section>

        <section style={panel}>
          <h2 style={h2}>Pricing and Payment Vision</h2>
          <div style={grid}>
            <div style={card}>
              <h3>Membership Plans</h3>
              <p>Free, Core, Plus, Pro, and Business Member access levels.</p>
            </div>
            <div style={card}>
              <h3>Payment Methods</h3>
              <p>Stripe, PayPal, Apple Pay, Google Pay, Pay Later, and global cards.</p>
            </div>
            <div style={card}>
              <h3>Reminders</h3>
              <p>Renewal reminders, product reminders, upgrades, and member follow-up.</p>
            </div>
            <div style={card}>
              <h3>Thank You Flow</h3>
              <p>Beautiful post-purchase appreciation page with voice greeting direction.</p>
            </div>
          </div>
        </section>

        <section style={panel}>
          <h2 style={h2}>Innovation Features</h2>
          <ul style={list}>
            <li>Pricing board layout</li>
            <li>Secure checkout direction</li>
            <li>Reminder workflow foundation</li>
            <li>Thank-you purchase journey</li>
            <li>Voice message support</li>
            <li>Future avatar greeting space</li>
          </ul>
        </section>

        <section style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/pricing" style={primaryBtn}>Open Pricing</a>
          <a href="/thank-you" style={secondaryBtn}>Open Thank You Page</a>
          <a href="/admin/founder/reminders" style={secondaryBtn}>Open Reminder Center</a>
        </section>
      </div>
    </main>
  );
}

const hero: React.CSSProperties = {
  padding: "28px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,215,122,0.28)",
  marginBottom: "24px",
  textAlign: "center",
};

const panel: React.CSSProperties = {
  padding: "24px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(140,190,255,0.20)",
  marginBottom: "24px",
};

const eyebrow: React.CSSProperties = {
  margin: 0,
  color: "#ffd67a",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontSize: "12px",
};

const title: React.CSSProperties = {
  marginTop: "12px",
  marginBottom: "12px",
  fontSize: "42px",
};

const subtitle: React.CSSProperties = {
  margin: 0,
  color: "#e7eefc",
  lineHeight: 1.7,
  fontSize: "18px",
};

const h2: React.CSSProperties = {
  marginTop: 0,
  color: "#ffd67a",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

const card: React.CSSProperties = {
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,190,255,0.16)",
};

const list: React.CSSProperties = {
  color: "#dbe7ff",
  lineHeight: 1.9,
  paddingLeft: "20px",
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #1f7fff, #53b3ff)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(153,204,255,0.25)",
};