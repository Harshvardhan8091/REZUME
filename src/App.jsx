import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import FinalCTA from './sections/FinalCTA'
import Footer from './components/Footer'

/**
 * App
 * Root component. Composes the page layout:
 *   Navbar → page sections
 *
 * Each section is a separate component living in src/sections/.
 * Add new sections here as the landing page grows.
 */
function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      
      <Footer />
    </>
  )
}

export default App
