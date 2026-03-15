import Footer from "../footer";

export default function NewsletterPage() {
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
    border: "1px solid #d6e2f2",
  } as const;

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: "12px",
    backgroundColor: "#c9a227",
    color: "#0b1f3a",
    textDecoration: "none",
    fontWeight: 700,
  } as const;

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <>
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
              background: "linear-gradient(135deg, #081a36, #0b2347)",
              color: "#ffffff",
              borderRadius: "28px",
              padding: "32px",
              marginBottom: "24px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "42px" }}>Newsletter</h1>
            <p style={{ marginTop: "12px", lineHeight: "1.8", color: "#d9e4f5" }}>
              Subscriber communication, platform updates, founder notes, announcements,
              and recurring SSGPT6 Core publishing.
            </p>
            <a href="/media" style={button}>Back to Media Hub</a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Subscribe</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                This is the newsletter signup section. Later it can connect to a real
                email system, subscriber database, or automated campaign workflow.
              </p>

              <div style={{ display: "grid", gap: "14px" }}>
                <input type="text" placeholder="Full name" style={inputStyle} />
                <input type="email" placeholder="Email address" style={inputStyle} />
                <button
                  style={{
                    ...button,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Join Newsletter
                </button>
              </div>
            </div>

            <div style={card}>
              <h2 style={{ marginTop: 0, color: "#0b1f3a" }}>Newsletter Topics</h2>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Subscribers can later receive founder updates, product announcements,
                blog highlights, webinar notices, company releases, and media updates.
              </p>
              <ul style={{ color: "#4b5563", lineHeight: "1.9", paddingLeft: "20px", marginBottom: 0 }}>
                <li>Founder messages</li>
                <li>Platform updates</li>
                <li>Blog and article highlights</li>
                <li>Webinar and event notices</li>
                <li>Company releases</li>
                <li>Media and video updates</li>
              </ul>
            </div>
          </div>

          <div style={{ ...card, marginTop: "24px" }}>
            <h2 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "30px" }}>
              Newsletter note
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.8", marginBottom: 0 }}>
              Right now this page is a professional front-end structure. Later it can
              connect to a real email provider, admin publishing tools, audience lists,
              and automated newsletter delivery systems.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}