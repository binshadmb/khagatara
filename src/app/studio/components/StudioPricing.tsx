'use client'

import { useState } from 'react'

type RazorpayResponse = {
  razorpay_payment_id: string
}

const PACKS = [
  { id: 'starter', name: 'Starter', credits: 5, price: '₹99', per: '₹19.8 per image', popular: false },
  { id: 'popular', name: 'Popular', credits: 15, price: '₹249', per: '₹16.6 per image', popular: true },
  { id: 'pro', name: 'Pro', credits: 40, price: '₹599', per: '₹14.9 per image', popular: false },
]

export default function StudioPricing() {
  const [email, setEmail] = useState('')

  async function handleBuy(packId: string) {
    const cleanEmail = email.trim()
    if (!cleanEmail) {
      window.alert('Enter the email that should receive these credits.')
      return
    }

    const res = await fetch('/api/studio/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pack: packId, email: cleanEmail }),
    })
    const data = await res.json()

    if (!res.ok || !data.order_id) {
      window.alert(data.error || 'Could not start checkout.')
      return
    }

    if (!window.Razorpay) {
      window.alert('Razorpay checkout is still loading. Try again in a moment.')
      return
    }

    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? '',
      amount: data.amount,
      currency: 'INR',
      order_id: data.order_id,
      name: 'Khagatara Studio',
      description: `${data.credits} enhancement credits`,
      handler: async (response: RazorpayResponse) => {
        await fetch('/api/studio/credits/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            credits: data.credits,
            payment_id: response.razorpay_payment_id,
          }),
        })
        window.location.reload()
      },
    })
    rzp.open()
  }

  return (
    <section id="studio-pricing" className="studio-pricing">
      <h2>Enhancement Credits</h2>
      <div className="studio-credit-email">
        <label htmlFor="credit-email">Credit delivery email</label>
        <input
          id="credit-email"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pricing-grid">
        {PACKS.map((pack) => (
          <div key={pack.id} className={`pricing-card ${pack.popular ? 'is-popular' : ''}`}>
            {pack.popular && <span className="popular-badge">Most Popular</span>}
            <h3>{pack.name}</h3>
            <strong>{pack.credits} credits</strong>
            <p>{pack.price}</p>
            <small>{pack.per}</small>
            <button type="button" onClick={() => handleBuy(pack.id)}>Buy {pack.name}</button>
          </div>
        ))}
      </div>
      <p className="studio-payment-note">
        Supports UPI, cards, net banking, wallets, and other Razorpay checkout options available in your region.
      </p>
    </section>
  )
}
