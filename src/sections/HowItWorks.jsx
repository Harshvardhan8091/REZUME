import './HowItWorks.css'

/**
 * HowItWorks
 * Visually explains the core product workflow in 3 steps:
 * Resume Upload -> Target Job -> Action Plan.
 */
function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works" aria-labelledby="hiw-heading">
      <div className="container">
        
        {/* ---- Intro ---- */}
        <div className="hiw__header">
          <span className="hiw__eyebrow">How it works</span>
          <h2 className="hiw__heading" id="hiw-heading">
            From application guesswork to a clear action plan.
          </h2>
          <p className="hiw__subheading">
            Give REZUME your resume and the role you're targeting. We'll show you
            where you match, where you fall short, and what to improve.
          </p>
        </div>

        {/* ---- Workflow Grid ---- */}
        <div className="hiw__grid">
          
          {/* Step 01 */}
          <div className="hiw__step">
            <div className="hiw__number">01</div>
            <h3 className="hiw__title">Add your resume</h3>
            <p className="hiw__description">
              Upload the resume you're using for the role.
            </p>
            
            <div className="hiw__mock" aria-hidden="true">
              <div className="hiw-upload__file">
                <div className="hiw-upload__icon">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="hiw-upload__info">
                  <span className="hiw-upload__name">RESUME.pdf</span>
                  <span className="hiw-upload__meta">PDF &middot; 248 KB</span>
                </div>
              </div>
              <div className="hiw-upload__status">
                <span>✓</span> Ready to analyze
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="hiw__step">
            <div className="hiw__number">02</div>
            <h3 className="hiw__title">Choose your target</h3>
            <p className="hiw__description">
              Paste the job description you're applying to.
            </p>

            <div className="hiw__mock" aria-hidden="true">
              <div className="hiw-job__title">Frontend Engineer</div>
              <hr className="hiw-job__divider" />
              <div className="hiw-job__tags">
                <span className="hiw-job__tag">React</span>
                <span className="hiw-job__tag">TypeScript</span>
                <span className="hiw-job__tag">REST APIs</span>
                <span className="hiw-job__tag">Node.js</span>
              </div>
              <div className="hiw-job__indicator">
                <span className="hiw-job__indicator-dot" />
                Role requirements detected
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="hiw__step">
            <div className="hiw__number">03</div>
            <h3 className="hiw__title">Get your action plan</h3>
            <p className="hiw__description">
              See your match score and the changes that matter most.
            </p>

            <div className="hiw__mock" aria-hidden="true">
              <div className="hiw-plan__score">
                <span className="hiw-plan__label">Match score:</span>
                <span className="hiw-plan__value">87%</span>
              </div>
              
              <div className="hiw-plan__groups">
                <div>
                  <div className="hiw-plan__group-title">Strong matches:</div>
                  <div className="hiw-plan__item">
                    <span className="hiw-plan__icon hiw-plan__icon--success">✓</span>
                    React
                  </div>
                  <div className="hiw-plan__item">
                    <span className="hiw-plan__icon hiw-plan__icon--success">✓</span>
                    JavaScript
                  </div>
                </div>
                <div>
                  <div className="hiw-plan__group-title">Needs attention:</div>
                  <div className="hiw-plan__item">
                    <span className="hiw-plan__icon hiw-plan__icon--warning">!</span>
                    TypeScript
                  </div>
                  <div className="hiw-plan__item">
                    <span className="hiw-plan__icon hiw-plan__icon--warning">!</span>
                    REST APIs
                  </div>
                </div>
              </div>

              <a href="#recommendations" className="hiw-plan__cta">
                View recommendations &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks
