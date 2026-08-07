import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Payment Successful — Khagatara", robots: "noindex" };

export default function PaymentSuccess() {
  return (
    <div style={{
      minHeight: "70vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "24px",
    }}>
      <div style={{
        width: "100%", maxWidth: "480px",
        background: "var(--surface, #fff)", borderRadius: "12px",
        border: "1px solid var(--border, #e5e7eb)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
        padding: "40px 28px", textAlign: "center",
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
        <h1 style={{ margin: "0 0 10px", color: "var(--accent, #9ece6a)", fontSize: "1.5rem" }}>
          Payment Successful
        </h1>
        <p style={{ color: "var(--muted, #6b7280)", lineHeight: 1.7, margin: "0 0 24px" }}>
          Thank you for your payment. Khagatara has received your transaction.
          You will receive a confirmation shortly.
        </p>
        <Link href="/" style={{
          display: "inline-block",
          background: "var(--accent, #9ece6a)",
          color: "var(--bg, #1a1b26)",
          borderRadius: "7px", padding: "11px 24px",
          textDecoration: "none", fontWeight: 700, fontSize: "0.95rem",
        }}>
          Back to Khagatara →
        </Link>
      </div>
    </div>
  );
}
