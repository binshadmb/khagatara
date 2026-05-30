const IMAGE_REMAKER_PLANS = [
  { name: 'Starter', price: '₹99/month', limit: '100 images' },
  { name: 'Pro', price: '₹299/month', limit: '500 images' },
  { name: 'Agency', price: '₹999/month', limit: 'Unlimited + API access' },
]

export default function ImageRemakerPricing() {
  return (
    <section className="image-remaker-pricing">
      {IMAGE_REMAKER_PLANS.map((plan) => (
        <div key={plan.name} className="image-remaker-price-card">
          <h3>{plan.name}</h3>
          <strong>{plan.price}</strong>
          <p>{plan.limit}</p>
        </div>
      ))}
    </section>
  )
}
