"use client";
import { useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    mode: "Sea",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    // TODO: connect to API later
    setSubmitted(true);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#fff",
      fontFamily: "sans-serif",
      padding: "2rem",
    } as React.CSSProperties,
    header: {
      textAlign: "center" as const,
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
    },
    subtitle: {
      color: "#888",
      fontSize: "1rem",
    },
    card: {
      maxWidth: "600px",
      margin: "0 auto",
      background: "#111",
      borderRadius: "12px",
      padding: "2rem",
      border: "1px solid #222",
    },
    row: {
      marginBottom: "1.2rem",
    },
    label: {
      display: "block",
      fontSize: "0.85rem",
      color: "#aaa",
      marginBottom: "0.4rem",
    },
    input: {
      width: "100%",
      background: "#1a1a1a",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "0.75rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
    },
    select: {
      width: "100%",
      background: "#1a1a1a",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "0.75rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
    },
    textarea: {
      width: "100%",
      background: "#1a1a1a",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "0.75rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
      minHeight: "100px",
      resize: "vertical" as const,
    },
    button: {
      width: "100%",
      background: "#c8a96e",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      padding: "0.9rem",
      fontSize: "1rem",
      fontWeight: 700,
      cursor: "pointer",
      marginTop: "1rem",
    },
    success: {
      textAlign: "center" as const,
      padding: "3rem",
    },
    successTitle: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
      color: "#c8a96e",
    },
    nav: {
      textAlign: "center" as const,
      marginBottom: "2rem",
    },
    navLink: {
      color: "#c8a96e",
      textDecoration: "none",
      fontSize: "0.9rem",
    },
  };

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <div style={styles.success}>
            <div style={styles.successTitle}>✓ Quote Request Received</div>
            <p style={{ color: "#888" }}>
              Thank you, {form.name}. We will get back to you within 24 hours
              on {form.phone} or {form.email}.
            </p>
            <p style={{ color: "#555", marginTop: "1rem", fontSize: "0.85rem" }}>
              Khagatara Cargo · cargo.khagatara.com
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.header}>
        <div style={styles.nav}>
          <a href="https://cargo.khagatara.com" style={styles.navLink}>
            ← Khagatara Cargo
          </a>
        </div>
        <h1 style={styles.title}>Request a Quote</h1>
        <p style={styles.subtitle}>
          Fill in your shipment details and we will respond within 24 hours.
        </p>
      </div>

      <div style={styles.card}>
        <div style={styles.row}>
          <label style={styles.label}>Full Name *</label>
          <input
            style={styles.input}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Phone *</label>
          <input
            style={styles.input}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Email *</label>
          <input
            style={styles.input}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Origin (From)</label>
          <input
            style={styles.input}
            name="origin"
            value={form.origin}
            onChange={handleChange}
            placeholder="e.g. Guangzhou, China"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Destination (To)</label>
          <input
            style={styles.input}
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="e.g. Thiruvananthapuram, India"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Cargo Type</label>
          <input
            style={styles.input}
            name="cargoType"
            value={form.cargoType}
            onChange={handleChange}
            placeholder="e.g. Electronics, Textiles, Machinery"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Approximate Weight / Volume</label>
          <input
            style={styles.input}
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="e.g. 500kg or 2 CBM"
          />
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Preferred Mode</label>
          <select
            style={styles.select}
            name="mode"
            value={form.mode}
            onChange={handleChange}
          >
            <option>Sea</option>
            <option>Air</option>
            <option>Courier</option>
            <option>Not Sure</option>
          </select>
        </div>

        <div style={styles.row}>
          <label style={styles.label}>Additional Message</label>
          <textarea
            style={styles.textarea}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any special requirements or questions..."
          />
        </div>

        <button style={styles.button} onClick={handleSubmit}>
          Submit Quote Request
        </button>

        <p style={{ textAlign: "center", color: "#555", fontSize: "0.8rem", marginTop: "1rem" }}>
          We respond within 24 hours · info@khagatara.com
        </p>
      </div>
    </main>
  );
}