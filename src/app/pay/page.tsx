import type { Metadata } from "next";
import PaymentOptionsWrapper from "./PaymentOptionsWrapper";

export const metadata: Metadata = {
  title: "Pay — Khagatara",
  robots: "noindex",
};

export default function PayPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "inherit",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "520px",
        background: "var(--surface, #fff)",
        borderRadius: "12px",
        border: "1px solid var(--border, #e5e7eb)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          background: "var(--accent, #9ece6a)",
          padding: "24px 28px",
          color: "var(--bg, #1a1b26)",
        }}>
          <h1 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>Secure Payment</h1>
          <p style={{ margin: "6px 0 0", opacity: 0.85, fontSize: "0.88rem", lineHeight: 1.5 }}>
            khagatara.com — tools, services &amp; subscriptions
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "28px" }}>
          <div style={{
            background: "#fff9e5", border: "1px solid #f0d87a",
            borderRadius: "8px", padding: "12px 16px", marginBottom: "24px",
            fontSize: "0.875rem", color: "#5a4500", lineHeight: 1.6,
          }}>
            📋 <strong>Enter the amount from your quotation.</strong><br />
            Use the exact amount shown on your invoice or quote from Khagatara.
          </div>

          <PaymentOptionsWrapper />

          <p style={{
            marginTop: "20px", textAlign: "center",
            fontSize: "0.78rem", color: "var(--muted, #6b7280)", lineHeight: 1.6,
          }}>
            PayPal for international · Razorpay for India (UPI, cards, netbanking)<br />
            All transactions are secured.
          </p>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid var(--border, #e5e7eb)",
          padding: "14px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.78rem",
          color: "var(--muted, #6b7280)",
        }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>← Back to Khagatara</a>
          <span>khagatara.com</span>
        </div>
      </div>
    </div>
  );
}
