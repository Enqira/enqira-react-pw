import { useState } from "react"
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
// import VectorComputer from "./components/BackgroundSVG/VectorComputer"

function App() {
  const [contactStyle, setContactStyle] = useState("none")

  return (
    <div>
      <ParticlesBackground />
      {/* <VectorComputer /> */}
      {/* <CodingSVG /> */}
      <div className="App slide-top">
        <HeaderCard
          setContactStyle={setContactStyle}
          contactStyle={contactStyle}
        />
        <ContactContainer
          contactStyle={contactStyle}
          setContactStyle={setContactStyle}
        />
        <SummaryComponent />
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
