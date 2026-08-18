import './Footer.css'

/**
 * Footer
 * Clean, professional ending to the landing page.
 * Contains brand description, basic navigation, and copyright.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer__top">
          {/* Brand & Description */}
          <div className="footer__brand-col">
            <a href="#" className="footer__logo">
              REZUME<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__desc">
              AI-powered resume intelligence for better applications.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="footer__nav">
            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Product</h4>
              <a href="#features" className="footer__link">Features</a>
              <a href="#how-it-works" className="footer__link">How it works</a>
              <a href="#pricing" className="footer__link">Pricing</a>
            </div>
            
            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Company</h4>
              <a href="#about" className="footer__link">About</a>
              <a href="#contact" className="footer__link">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            &copy; 2026 REZUME. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
