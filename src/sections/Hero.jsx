import ProductPreview from '../components/ProductPreview'
import './Hero.css'

/**
 * Hero
 * Above-the-fold section: headline, supporting copy, CTAs, and
 * the ProductPreview dashboard side-by-side on desktop,
 * stacked on mobile.
 */
function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="container hero__layout">
        {/* ---- Copy column -------------------------------- */}
        <div className="hero__content">
          <span className="hero__eyebrow">AI Resume Intelligence</span>

          <h1 className="hero__heading" id="hero-heading">
            Your resume shouldn't be
            <span className="hero__heading-muted"> a guessing game.</span>
          </h1>

          <p className="hero__subheading">
            REZUME analyzes your resume against the job you're targeting and
            shows you exactly what to improve — before you apply.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn-primary">
              Analyze my resume
            </button>
            <button type="button" className="btn-ghost">
              See how it works
            </button>
          </div>
        </div>

        {/* ---- Product preview column --------------------- */}
        <div className="hero__preview">
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}

export default Hero
