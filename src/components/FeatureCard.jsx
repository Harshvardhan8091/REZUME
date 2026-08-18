import './FeatureCard.css'

/**
 * FeatureCard
 * A reusable card component for the Features section.
 * Contains a number, title, description, and a slot for a custom visual demonstration.
 */
function FeatureCard({ number, title, description, children }) {
  return (
    <div className="feature-card">
      <div className="feature-card__number">{number}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      
      <div className="feature-card__visual" aria-hidden="true">
        {children}
      </div>
    </div>
  )
}

export default FeatureCard
