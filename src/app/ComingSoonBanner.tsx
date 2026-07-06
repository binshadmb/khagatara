"use client";

export default function ComingSoonBanner() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: '#111', color: '#fff', textAlign: 'center',
      padding: '10px 16px', fontSize: '14px', fontWeight: 600,
    }}>
      Coming Soon – site under construction
    </div>
  );
}
