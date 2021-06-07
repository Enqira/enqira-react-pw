import { useState, useRef } from "react"
import "./App.css"
import HeaderCard from "./components/HeaderCard/HeaderCard"
import SummaryComponent from "./components/SummaryComponent/SummaryComponent"
import SkillsComponent from "./components/SkillsComponent/SkillsComponent"
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent"
import CoursesComponent from "./components/Courses/CoursesComponent"
import OthersComponent from "./components/Others/OthersComponent"
import ContactContainer from "./components/ContactContainer/ContactContainer"
import JobExperienceComponent from "./components/JobExperience/JobExperienceComponent"
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground"

function App() {
  const [contactStyle, setContactStyle] = useState("none")
  const contactRef = useRef(null)

  return (
    <div>
      <ParticlesBackground />
      <div className="App slide-top">
        <HeaderCard
          setContactStyle={setContactStyle}
          contactStyle={contactStyle}
          contactRef={contactRef}
        />
        <ContactContainer
          contactStyle={contactStyle}
          setContactStyle={setContactStyle}
          contactRef={contactRef}
        />
        <SummaryComponent
          contactStyle={contactStyle}
          setContactStyle={setContactStyle}
          contactRef={contactRef}
        />
        <SkillsComponent />
        <ProjectsComponent />
        <CoursesComponent />
        <JobExperienceComponent />
        <OthersComponent />
      </div>
    </div>
  )
}

export default App
