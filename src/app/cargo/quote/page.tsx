"use client";
import { useState } from "react";
import LocationPicker from "../components/LocationPicker";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    cargoType: "General Cargo",
    weightAmount: "",
    weightUnit: "KG",
    mode: "Sea",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
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
      marginBottom: "3rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "0.5rem",
      background: "linear-gradient(to right, #fff, #c8a96e)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      color: "#888",
      fontSize: "1rem",
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
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "2rem",
    },
    card: {
      background: "rgba(255, 255, 255, 0.02)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(200, 169, 110, 0.15)",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#c8a96e",
      marginBottom: "1.5rem",
      borderBottom: "1px solid rgba(200, 169, 110, 0.1)",
      paddingBottom: "0.5rem",
    },
    row: {
      marginBottom: "1.2rem",
    },
    label: {
      display: "block",
      fontSize: "0.85rem",
      color: "#aaa",
      marginBottom: "0.4rem",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      background: "#111",
      border: "1.5px solid #252525",
      borderRadius: "10px",
      padding: "0.82rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
      outline: "none",
      transition: "border-color 0.2s",
      fontFamily: "inherit",
    },
    select: {
      width: "100%",
      background: "#111",
      border: "1.5px solid #252525",
      borderRadius: "10px",
      padding: "0.82rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
      outline: "none",
      appearance: "none" as const,
      cursor: "pointer",
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      background: "#111",
      border: "1.5px solid #252525",
      borderRadius: "10px",
      padding: "0.82rem 1rem",
      color: "#fff",
      fontSize: "0.95rem",
      boxSizing: "border-box" as const,
      minHeight: "120px",
      resize: "vertical" as const,
      outline: "none",
      transition: "border-color 0.2s",
      fontFamily: "inherit",
    },
    button: {
      width: "100%",
      background: "linear-gradient(135deg, #d4b57a, #b08d4b)",
      color: "#000",
      border: "none",
      borderRadius: "10px",
      padding: "1rem",
      fontSize: "1.1rem",
      fontWeight: 700,
      cursor: "pointer",
      marginTop: "1.5rem",
      boxShadow: "0 4px 15px rgba(200, 169, 110, 0.3)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    success: {
      textAlign: "center" as const,
      padding: "4rem 2rem",
      background: "rgba(255, 255, 255, 0.02)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(200, 169, 110, 0.15)",
      borderRadius: "16px",
      maxWidth: "600px",
      margin: "0 auto",
    },
    successTitle: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "1rem",
      color: "#c8a96e",
    },
    weightContainer: {
      display: "flex",
      gap: "0.5rem",
    },
  };

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.success}>
          <div style={styles.successTitle}>✓ Quote Request Received</div>
          <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Thank you, {form.name}. We have received your request to ship from{" "}
            <span style={{ color: "#fff" }}>{form.origin || "your origin"}</span> to{" "}
            <span style={{ color: "#fff" }}>{form.destination || "your destination"}</span>.
          </p>
          <p style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 1.6, marginTop: "1rem" }}>
            Our team will contact you within 24 hours at <strong>{form.phone}</strong> or <strong>{form.email}</strong>.
          </p>
          <div style={{ marginTop: "3rem" }}>
            <a href="https://cargo.khagatara.com" style={{ color: "#c8a96e", textDecoration: "none", borderBottom: "1px solid #c8a96e", paddingBottom: "2px" }}>
              Return to Homepage
            </a>
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
          Fill in your shipment details for a customized logistics solution.
        </p>
      </div>

      <div style={styles.container}>
        {/* Left Column: Shipment Details */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Shipment Details</h2>
          
          <div style={styles.row}>
            <label style={styles.label}>Origin (From) *</label>
            <LocationPicker
              name="origin"
              value={form.origin}
              onChange={(val) => handleLocationChange("origin", val)}
              placeholder="Search country, port or city..."
            />
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Destination (To) *</label>
            <LocationPicker
              name="destination"
              value={form.destination}
              onChange={(val) => handleLocationChange("destination", val)}
              placeholder="Search country, port or city..."
            />
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Cargo Type</label>
            <div style={{ position: "relative" }}>
              <select
                style={styles.select}
                name="cargoType"
                value={form.cargoType}
                onChange={handleChange}
              >
                <option value="General Cargo">General Cargo</option>
                <option value="Electronics">Electronics</option>
                <option value="Textiles & Garments">Textiles & Garments</option>
                <option value="Machinery & Parts">Machinery & Parts</option>
                <option value="Automotive">Automotive</option>
                <option value="Chemicals & Hazardous">Chemicals & Hazardous</option>
                <option value="Perishables / Temp Controlled">Perishables / Temp Controlled</option>
                <option value="Oversized / Project Cargo">Oversized / Project Cargo</option>
                <option value="Other">Other</option>
              </select>
              <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#666" }}>▼</span>
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Approximate Weight / Volume</label>
            <div style={styles.weightContainer}>
              <input
                style={{ ...styles.input, flex: 2 }}
                name="weightAmount"
                value={form.weightAmount}
                onChange={handleChange}
                placeholder="e.g. 500"
                type="number"
              />
              <div style={{ position: "relative", flex: 1 }}>
                <select
                  style={styles.select}
                  name="weightUnit"
                  value={form.weightUnit}
                  onChange={handleChange}
                >
                  <option value="KG">KG</option>
                  <option value="Tons">Tons</option>
                  <option value="CBM">CBM</option>
                  <option value="LBS">LBS</option>
                </select>
                <span style={{ position: "absolute", right: "0.8rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#666", fontSize: "0.8rem" }}>▼</span>
              </div>
            </div>
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Preferred Mode</label>
            <div style={{ position: "relative" }}>
              <select
                style={styles.select}
                name="mode"
                value={form.mode}
                onChange={handleChange}
              >
                <option>Sea Freight (FCL)</option>
                <option>Sea Freight (LCL)</option>
                <option>Air Freight</option>
                <option>Courier / Express</option>
                <option>Land Transportation</option>
                <option>Not Sure - Please Advise</option>
              </select>
              <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#666" }}>▼</span>
            </div>
          </div>
        </div>

        {/* Right Column: Personal Details */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Contact Information</h2>
          
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
            <label style={styles.label}>Phone Number *</label>
            <input
              style={styles.input}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Email Address *</label>
            <input
              style={styles.input}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              type="email"
            />
          </div>

          <div style={styles.row}>
            <label style={styles.label}>Additional Requirements (Optional)</label>
            <textarea
              style={styles.textarea}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any specific delivery timelines, special handling needs, or questions..."
            />
          </div>

          <button 
            style={styles.button} 
            onClick={handleSubmit}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Submit Quote Request
          </button>
          
          <p style={{ textAlign: "center", color: "#666", fontSize: "0.85rem", marginTop: "1.5rem" }}>
            Our logistics experts typically respond within 2-4 hours during business days.
          </p>
        </div>
      </div>
    </main>
  );
}