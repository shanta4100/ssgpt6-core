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
                  SSGPT6 Core Media
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
                <a href="/videos" style={navLink}>Videos</a>
                <a href="/blogs" style={navLink}>Blogs</a>
                <a href="/webinar" style={activeNav}>Webinar</a>
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
              Webinar Hub
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#d9e4f5",
                maxWidth: "840px",
              }}
            >
              Organize live sessions, replay libraries, training events, founder
              briefings, business showcases, and future interactive learning
              experiences from one webinar section.
            </p>
          </div>

          <div style={card}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "14px",
                color: "#0b1f3a",
                fontSize: "30px",
              }}
            >
              Featured Webinar
            </h3>

            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Use this section for your next public webinar, replay session, or
              internal business learning event.
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
                Upcoming Session
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
                Add your webinar title, time, registration details, replay link,
                or featured event summary here.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginTop: "24px",
            }}
          >
            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Live Sessions</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Schedule and present live webinars, founder briefings, and public
                discussion sessions.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Replay Library</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Store past webinar recordings and make them available as replay
                content for your audience.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Training Events</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Use webinars for education, onboarding, product training, and
                guided learning experiences.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, color: "#0b1f3a" }}>Business Showcases</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                Highlight business presentations, platform demonstrations, and
                future company announcements.
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
              Webinar Operations
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              This page can later connect with registrations, calendar booking,
              replay hosting, admin webinar controls, event reminders, and
              subscriber follow-up workflows.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/newsletter" style={button}>
                Open Newsletter
              </a>
              <a href="/media" style={button}>
                Open Media Page
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}