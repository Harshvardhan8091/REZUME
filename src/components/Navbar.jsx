import './Navbar.css'

/**
 * Navbar
 * Sticky top-level navigation.
 * Left:  product wordmark (REZUME.)
 * Right: page links + "Sign in" text link + "Get started" CTA button
 */
function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo" aria-label="REZUME home">
          REZUME<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <a href="#features" className="navbar__link">Features</a>
          <a href="#how-it-works" className="navbar__link">How it works</a>
          <a href="#pricing" className="navbar__link">Pricing</a>
        </nav>

        <div className="navbar__actions">
          <a href="#sign-in" className="navbar__link">Sign in</a>
          <button type="button" className="navbar__cta">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
