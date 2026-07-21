import { CheckCircle2 } from 'lucide-react'
import { caseStudies } from '../data/portfolio'
import './CaseStudies.css'

function PipelineViz({ stages }: { stages: string[] }) {
  return (
    <div className="cs__pipeline" role="img" aria-label={`Pipeline: ${stages.join(' → ')}`}>
      <div className="cs__pipeline-track">
        {stages.map((stage, i) => (
          <div key={stage} className="cs__pipeline-step">
            <div className={`cs__pipeline-node cs__pipeline-node--${i === 0 || i === stages.length - 1 ? 'lime' : i % 2 === 0 ? 'cyan' : 'amber'}`} aria-hidden="true" />
            <span className="cs__pipeline-label mono">{stage}</span>
            {i < stages.length - 1 && (
              <div className="cs__pipeline-connector" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section className="section cs" id="case-studies" aria-labelledby="cs-title">
      <div className="container">
        <p className="section-label">Selected Case Studies</p>
        <h2 className="section-title" id="cs-title">Quality Engineering in Practice</h2>
        <p className="section-desc">
          Enterprise-scale testing and automation work across banking, payments, and automotive service domains.
        </p>

        <div className="cs__list">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="cs__item" aria-labelledby={`cs-title-${cs.id}`}>
              {/* Header */}
              <div className="cs__header">
                <div className="cs__meta">
                  <span className="cs__number mono">{cs.number}</span>
                  <div>
                    <p className="cs__org mono">{cs.org} — {cs.industry}</p>
                    <h3 className="cs__title" id={`cs-title-${cs.id}`}>{cs.title}</h3>
                    <p className="cs__role">
                      <span>{cs.role}</span>
                      <span className="cs__dates mono">{cs.dates}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Context */}
              <p className="cs__context">{cs.context}</p>

              {/* Pipeline Viz */}
              <PipelineViz stages={cs.pipeline} />

              {/* Two-column body */}
              <div className="cs__body">
                {/* Contributions */}
                <div className="cs__contributions">
                  <h4 className="cs__sub-title">Contributions</h4>
                  <ul className="cs__list-items">
                    {cs.contributions.map((c, i) => (
                      <li key={i} className="cs__contribution-item">
                        <CheckCircle2 size={14} className="cs__check" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: stack + outcomes */}
                <div className="cs__sidebar">
                  <div className="cs__stack">
                    <h4 className="cs__sub-title">Technology Stack</h4>
                    <div className="cs__tags">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="tag tag--cyan">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cs__outcomes">
                    <h4 className="cs__sub-title">Quality Outcomes</h4>
                    <ul className="cs__outcome-list">
                      {cs.outcomes.map((o, i) => (
                        <li key={i} className="cs__outcome-item">
                          <span className="cs__outcome-dot" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
