import { focusAreas } from '../data/portfolio'
import './EngineeringFocus.css'

export default function EngineeringFocus() {
  return (
    <section className="section ef" id="focus" aria-labelledby="ef-title">
      <div className="container">
        <p className="section-label">Engineering Focus</p>
        <h2 className="section-title" id="ef-title">What I Build &amp; Validate</h2>
        <p className="section-desc">
          Four core capabilities developed across 10+ years of enterprise QA, automation engineering, and AI quality work.
        </p>

        <div className="ef__grid">
          {focusAreas.map((area) => (
            <article key={area.id} className={`ef__card ef__card--${area.accentColor}`}>
              <div className="ef__card-header">
                <div className={`ef__card-dot ef__card-dot--${area.accentColor}`} aria-hidden="true" />
                <h3 className="ef__card-title">{area.label}</h3>
              </div>
              <p className="ef__card-desc">{area.description}</p>
              <div className="ef__tags" role="list" aria-label={`${area.label} skills`}>
                {area.tags.map((tag) => (
                  <span key={tag} className={`tag tag--${area.accentColor}`} role="listitem">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
