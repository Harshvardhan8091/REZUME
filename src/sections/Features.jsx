import FeatureCard from '../components/FeatureCard'
import './Features.css'

/**
 * Features
 * "Know what matters" section explaining core capabilities.
 * Renders three polished cards, each with a unique UI mockup.
 */
function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <div className="container">
        {/* ---- Intro ---- */}
        <div className="features__header">
          <span className="features__eyebrow">Built for better applications</span>
          <h2 className="features__heading" id="features-heading">
            Know what matters before you apply.
          </h2>
          <p className="features__subheading">
            REZUME turns your resume into a clear action plan — so you know what
            to fix, what to keep, and where you actually match the role.
          </p>
        </div>

        {/* ---- Cards Grid ---- */}
        <div className="features__grid">
          
          {/* Card 1: ATS Intelligence */}
          <FeatureCard
            number="01"
            title="ATS Intelligence"
            description="See how well your resume matches the language, structure, and requirements of the role."
          >
            <div className="demo-box">
              <div className="demo-ats__header">
                <span className="demo-ats__label">ATS compatibility</span>
                <span className="demo-ats__value">92%</span>
              </div>
              <div className="demo-ats__track">
                <div 
                  className="demo-ats__fill" 
                  role="progressbar" 
                  aria-valuenow={92} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                />
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Skill Gaps */}
          <FeatureCard
            number="02"
            title="Skill Gaps"
            description="Spot important skills from the job description that your resume doesn't clearly demonstrate."
          >
            <div className="demo-box demo-skills">
              <span className="demo-skill">React</span>
              <span className="demo-skill demo-skill--missing">TypeScript</span>
              <span className="demo-skill">Node.js</span>
              <span className="demo-skill demo-skill--missing">REST APIs</span>
            </div>
          </FeatureCard>

          {/* Card 3: Actionable Feedback */}
          <FeatureCard
            number="03"
            title="Actionable Feedback"
            description="Get specific improvements you can make instead of generic resume advice."
          >
            <div className="demo-box">
              <div className="demo-feedback__header">
                <span aria-hidden="true">✦</span> Make this stronger
              </div>
              <div className="demo-feedback__block">
                <div className="demo-feedback__label">Current</div>
                <div className="demo-feedback__text demo-feedback__text--strike">
                  Worked on frontend features.
                </div>
              </div>
              <div className="demo-feedback__block">
                <div className="demo-feedback__label">Suggested</div>
                <div className="demo-feedback__text">
                  Built responsive React features used across 3 product workflows.
                </div>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  )
}

export default Features
