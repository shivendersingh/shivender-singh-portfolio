import Nav from './components/Nav'
import Hero from './components/Hero'
import EngineeringFocus from './components/EngineeringFocus'
import CaseStudies from './components/CaseStudies'
import TechStack from './components/TechStack'
import ExperienceTimeline from './components/ExperienceTimeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EngineeringFocus />
        <CaseStudies />
        <TechStack />
        <ExperienceTimeline />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
