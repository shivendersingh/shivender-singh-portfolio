import { experience } from '../data/portfolio'
import './ExperienceTimeline.css'

export default function ExperienceTimeline() {
  return (
    <section className="section et" id="experience" aria-labelledby="et-title">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title" id="et-title">Career Timeline</h2>
        <p className="section-desc">
          10+ years of progressive experience in software quality engineering across global enterprises.
        </p>

        <div className="et__timeline" role="list">
          {experience.map((role, index) => (
            <div
              key={role.id}
              className={`et__item${role.expanded ? ' et__item--expanded' : ''}`}
              role="listitem"
            >
              <div className="et__line-col" aria-hidden="true">
                <div className={`et__dot${index === 0 ? ' et__dot--active' : ''}`} />
                {index < experience.length - 1 && <div className="et__connector" />}
              </div>

              <div className="et__content">
                <div className="et__header">
                  <div>
                    <h3 className="et__title">{role.title}</h3>
                    <p className="et__company">
                      {role.company}
                      <span className="et__period mono">{role.period}</span>
                    </p>
                  </div>
                  {index === 0 && (
                    <span className="tag tag--lime et__current" aria-label="Current position">
                      Current
                    </span>
                  )}
                </div>

                {role.expanded && role.highlights.length > 0 && (
                  <ul className="et__highlights">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="et__highlight">
                        <span className="et__highlight-dash" aria-hidden="true">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
