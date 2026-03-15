"use client";

import { FormEvent, useState } from "react";

export default function MediaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Subscription failed.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Subscribed successfully.");
      setName("");
      setEmail("");
    } catch {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="ssgpt6-media-page">
      <div className="media-container">
        <header className="media-hero">
          <p className="media-eyebrow">GNAIAAAC LLC • Powered by SSGPT6-CORE</p>
          <h1>Media Center</h1>
          <p className="media-subtitle">
            Video, audio, podcast, newsletter, webinar, and public media access in one structured place.
          </p>
        </header>

        <section className="media-section">
          <h2>Featured Video</h2>
          <p className="media-text">
            Replace the sample YouTube embed link with your real video link.
          </p>

          <div className="media-video-frame">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Featured SSGPT6 Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="media-section">
          <h2>Audio and Podcast</h2>
          <p className="media-text">
            Put your real MP3 file inside <strong>public/audio/</strong> and update the filename below.
          </p>

          <div className="media-card">
            <h3>Podcast Episode 1</h3>
            <p>Founder update, platform vision, and media direction.</p>
            <audio controls preload="none" className="media-audio">
              <source src="/audio/sample-podcast.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </section>

        <section className="media-section">
          <h2>Newsletter</h2>
          <p className="media-text">
            Use this newsletter form to collect name and email through your website.
          </p>

          <form className="media-newsletter-form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-name">Full Name</label>
            <input
              id="newsletter-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="newsletter-email">Email Address</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Subscribe"}
            </button>

            {message ? <p className="newsletter-message">{message}</p> : null}
          </form>
        </section>

        <section className="media-section">
          <h2>Webinars</h2>
          <div className="media-grid">
            <article className="media-card">
              <h3>Webinar 1</h3>
              <p>Platform overview and growth direction.</p>
              <a href="/contact" className="media-btn">
                Request Access
              </a>
            </article>

            <article className="media-card">
              <h3>Webinar 2</h3>
              <p>Business support, strategy, and member pathways.</p>
              <a href="/contact" className="media-btn">
                Request Access
              </a>
            </article>

            <article className="media-card">
              <h3>Webinar 3</h3>
              <p>Research, learning, and public media systems.</p>
              <a href="/contact" className="media-btn">
                Request Access
              </a>
            </article>
          </div>
        </section>

        <section className="media-section">
          <div className="media-actions">
            <a href="/" className="media-btn">
              Back to Home
            </a>
            <a href="/contact" className="media-btn media-btn-secondary">
              Contact Media Team
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}