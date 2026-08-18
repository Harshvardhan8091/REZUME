import { useState, useEffect, useRef } from 'react'
import './ProductPreview.css'

/**
 * ProductPreview
 * A static mock of the REZUME analysis dashboard.
 * Includes a one-time entry animation triggered via IntersectionObserver.
 */

const METRICS = [
  { label: 'ATS Match',   value: 92 },
  { label: 'Skills Match', value: 84 },
  { label: 'Experience',   value: 88 },
]

const INSIGHTS = [
  {
    type: 'success',
    title: 'Strong keyword coverage',
    detail: 'Your resume matches most of the role requirements.',
  },
  {
    type: 'warning',
    title: 'Missing technical skills',
    detail: 'Consider highlighting React and REST APIs.',
  },
  {
    type: 'success',
    title: 'Experience is well presented',
    detail: 'Your achievements are clearly quantified.',
  },
]

function MetricBar({ label, value, isTriggered, isReducedMotion }) {
  const width = isTriggered || isReducedMotion ? `${value}%` : '0%'
  
  return (
    <div className="preview__metric">
      <div className="preview__metric-header">
        <span className="preview__metric-label">{label}</span>
        <span className="preview__metric-value">{value}%</span>
      </div>
      <div className="preview__metric-track">
        <div
          className="preview__metric-fill"
          style={{ width }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${value}%`}
        />
      </div>
    </div>
  )
}

function InsightRow({ type, title, detail, isTriggered, isReducedMotion, index }) {
  const icon = type === 'success' ? '✓' : '!'
  
  // Stagger insights after the main 1000ms score animation
  const baseDelay = 1000
  const staggerDelay = 150
  const totalDelay = baseDelay + (index * staggerDelay)
  
  const opacity = isTriggered || isReducedMotion ? 1 : 0
  const transform = isTriggered || isReducedMotion ? 'translateY(0)' : 'translateY(8px)'
  
  const style = isReducedMotion 
    ? { opacity: 1, transform: 'none' }
    : { opacity, transform, transitionDelay: `${totalDelay}ms` }

  return (
    <div className={`preview__insight preview__insight--${type}`} style={style}>
      <span className="preview__insight-icon" aria-hidden="true">{icon}</span>
      <div>
        <p className="preview__insight-title">{title}</p>
        <p className="preview__insight-detail">{detail}</p>
      </div>
    </div>
  )
}

function ProductPreview() {
  const finalScore = 87
  const [animatedScore, setAnimatedScore] = useState(0)
  const [isTriggered, setIsTriggered] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(reducedMotionQuery.matches)

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsTriggered(true)
          observer.disconnect() // Trigger only once

          if (reducedMotionQuery.matches) {
            setAnimatedScore(finalScore)
          } else {
            // Animate number 0 -> 87 over 1000ms
            const duration = 1000
            const startTime = performance.now()

            const animateNumber = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // easeOutCubic
              const easeOut = 1 - Math.pow(1 - progress, 3)
              setAnimatedScore(Math.floor(finalScore * easeOut))

              if (progress < 1) {
                requestAnimationFrame(animateNumber)
              } else {
                setAnimatedScore(finalScore)
              }
            }
            requestAnimationFrame(animateNumber)
          }
        }
      },
      { threshold: 0.25 } // Trigger when 25% visible
    )

    if (previewRef.current) {
      observer.observe(previewRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mainBarWidth = isTriggered || isReducedMotion ? `${finalScore}%` : '0%'

  return (
    <div 
      className={`preview ${isReducedMotion ? 'preview--reduced-motion' : ''}`} 
      ref={previewRef}
      aria-label="Product preview — REZUME analysis dashboard"
    >
      {/* Dashboard card */}
      <div className="preview__card">
        {/* Header row */}
        <div className="preview__header">
          <div>
            <h2 className="preview__title">Resume Analysis</h2>
            <p className="preview__job">Frontend Engineer</p>
          </div>
          <div className="preview__badge">
            <span className="preview__badge-dot" aria-hidden="true" />
            Job Match
          </div>
        </div>

        {/* Overall score */}
        <div className="preview__score-section">
          <div className="preview__score-ring">
            <span className="preview__score-number">{animatedScore}</span>
            <span className="preview__score-max">/ 100</span>
          </div>
          <div className="preview__score-bar-track">
            <div
              className="preview__score-bar-fill"
              style={{ width: mainBarWidth }}
              role="progressbar"
              aria-valuenow={animatedScore}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Overall score: ${animatedScore} out of 100`}
            />
          </div>
        </div>

        {/* Metric breakdown */}
        <div className="preview__metrics">
          {METRICS.map((m) => (
            <MetricBar 
              key={m.label} 
              label={m.label} 
              value={m.value} 
              isTriggered={isTriggered}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>

        {/* Divider */}
        <hr className="preview__divider" />

        {/* AI Insights */}
        <div className="preview__insights">
          <h3 className="preview__insights-heading">AI Insights</h3>
          {INSIGHTS.map((insight, index) => (
            <InsightRow
              key={insight.title}
              type={insight.type}
              title={insight.title}
              detail={insight.detail}
              index={index}
              isTriggered={isTriggered}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
