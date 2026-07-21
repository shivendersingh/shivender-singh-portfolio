import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Download, ArrowRight, Mail } from 'lucide-react'
import { person } from '../data/portfolio'
import PipelineScene from './PipelineScene'
import './Hero.css'

function WebGLFallback() {
  return (
    <div className="hero__canvas-fallback" aria-hidden="true">
      <div className="hero__fallback-pipeline">
        {['Requirements', 'Test Design', 'Automation', 'CI/CD', 'QA Signals', 'Release'].map((label, i) => (
          <div key={label} className="hero__fallback-node">
            <div className={`hero__fallback-dot hero__fallback-dot--${i < 2 ? 'lime' : i < 4 ? 'cyan' : i === 4 ? 'amber' : 'lime'}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="hero" id="overview" aria-labelledby="hero-name">
      {/* 3D Canvas layer */}
      <div ref={canvasRef} className="hero__canvas" aria-hidden="true">
        {!prefersReducedMotion ? (
          <Suspense fallback={<WebGLFallback />}>
            <Canvas
              camera={{ position: [0, 0, 5.5], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
            >
              <PipelineScene />
            </Canvas>
          </Suspense>
        ) : (
          <WebGLFallback />
        )}
      </div>

      {/* Hero content */}
      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__pre-label mono">
            <span className="hero__status-dot" aria-hidden="true" />
            Senior SDET &amp; QA Automation Engineer
          </p>

          <h1 className="hero__name" id="hero-name">
            Shivender<br />Singh
          </h1>

          <p className="hero__tagline">{person.tagline}</p>

          <div className="hero__pipeline-labels" aria-label="Quality pipeline stages">
            {['Requirements', 'Test Design', 'Automation', 'CI/CD', 'QA Signals', 'Release'].map((stage, i) => (
              <span key={stage} className="hero__stage">
                <span className={`hero__stage-dot ${i < 2 ? 'hero__stage-dot--lime' : i < 4 ? 'hero__stage-dot--cyan' : i === 4 ? 'hero__stage-dot--amber' : 'hero__stage-dot--lime'}`} aria-hidden="true" />
                <span className="mono">{stage}</span>
                {i < 5 && <span className="hero__stage-arrow" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#case-studies" className="btn btn--primary">
              <ArrowRight size={16} aria-hidden="true" />
              View Case Studies
            </a>
            <a
              href={person.resumeFile}
              download="ShivenderSingh-Resume.pdf"
              className="btn btn--outline"
              title="Download resume PDF"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={`mailto:${person.email}`}
              className="btn btn--outline hero__btn-icon"
              aria-label="Send email to Shivender"
              title={`Email: ${person.email}`}
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="hero__availability">
            <span className="hero__avail-dot" aria-hidden="true" />
            {person.availability}
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
