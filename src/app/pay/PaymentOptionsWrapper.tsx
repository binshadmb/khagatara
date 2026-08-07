"use client";
import PaymentOptions from "@/app/components/PaymentOptions";

export default function PaymentOptionsWrapper() {
  return (
    <>
      <style>{`
        .payment-options { display: grid; gap: 16px; }
        .payment-tabs { display: flex; gap: 8px; }
        .payment-tabs button {
          flex: 1; padding: 9px 14px;
          border: 1px solid var(--border, #e5e7eb);
          border-radius: 7px;
          background: var(--surface-2, #f9fafb);
          cursor: pointer; font-size: 0.85rem; font-weight: 600;
          color: var(--muted, #6b7280); transition: all 0.15s;
        }
        .payment-tabs button.active {
          background: var(--accent, #9ece6a);
          border-color: var(--accent, #9ece6a);
          color: var(--bg, #1a1b26);
        }
        .payment-panel { padding-top: 8px; }
        .razorpay-btn {
          width: 100%; padding: 12px; border: none; border-radius: 7px;
          background: var(--accent, #9ece6a); color: var(--bg, #1a1b26);
          font-size: 1rem; font-weight: 700; cursor: pointer;
          transition: opacity 0.15s;
        }
        .razorpay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .razorpay-btn:hover:not(:disabled) { opacity: 0.85; }
      `}</style>
      <PaymentOptions
        hostedButtonId="A9CU5B4AKJT8G"
        razorpayAmount={100}
        description="Khagatara — invoice payment"
        defaultMethod="paypal"
      />
    </>
  );
}
