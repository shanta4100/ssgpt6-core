import Footer from "../footer";

export default function WebinarPage() {
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
                  Webinar Hub
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
                <a href="/media" style={navLink}>Media</a>
                <a href="/videos" style={navLink}>Videos</a>
                <a href="/blogs" style={navLink}>Blogs</a>
                <a href="/webinar" style={activeNav}>Webinar</a>
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
              Webinar hub
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
              Organize public sessions, internal learning events, replay content,
              live presentations, founder briefings, and future platform
              education programs from one webinar center.
            </p>
          </div>

          <div style={{ ...card, marginBottom: "24px" }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Featured webinar
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Use this area for your main live event, replay spotlight,
              educational session, or internal training presentation.
            </p>

            <div
              style={{
                backgroundColor: "#f8fbff",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid #d6e2f2",
              }}
            >
              <h4
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  color: "#0b1f3a",
                  fontSize: "24px",
                }}
              >
                Upcoming session
              </h4>
              <p
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: "#42546b",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                Add your title, date, time, replay notice, or session summary
                here.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Live Events
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Host scheduled live sessions for your audience or company users.
              </p>
              <a href="/contact" style={button}>
                Contact Team
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Replay Library
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Keep webinar recordings available for later viewing and reuse.
              </p>
              <a href="/videos" style={button}>
                Open Videos
              </a>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a", fontSize: "26px" }}>
                Internal Learning
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Support internal training, knowledge sessions, and protected team
                education.
              </p>
              <a href="/admin" style={button}>
                Open Admin
              </a>
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
              Webinar note
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              This page can later connect to registrations, reminders, replay
              hosting, protected event access, subscriber follow-up, and
              admin-managed webinar publishing workflows.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}