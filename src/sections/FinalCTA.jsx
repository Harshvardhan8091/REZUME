import './FinalCTA.css'

/**
 * FinalCTA
 * The concluding section of the landing page.
 * Restates the core value proposition and drives the user to the main action.
 */
function FinalCTA() {
  return (
    <section className="final-cta" id="cta" aria-labelledby="cta-heading">
      <div className="container final-cta__container">
        
        <span className="final-cta__eyebrow">Ready when you are</span>
        
        <h2 className="final-cta__heading" id="cta-heading">
          Know what your resume is really saying.
        </h2>
        
        <p className="final-cta__subheading">
          Analyze your resume against the role you want and leave with a clear plan for what to improve.
        </p>
        
        <a href="#analyze" className="final-cta__button">
          Analyze my resume 
          <span className="final-cta__button-arrow" aria-hidden="true">&rarr;</span>
        </a>
        
      </div>
    </section>
  )
}

export default FinalCTA
