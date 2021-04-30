import { useState } from "react"
import "./App.css"
import HeaderCard from "./components/HeaderCard/HeaderCard"
import SummaryComponent from "./components/SummaryComponent/SummaryComponent"
import SkillsComponent from "./components/SkillsComponent/SkillsComponent"
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent"
import CoursesComponent from "./components/Courses/CoursesComponent"
import OthersComponent from "./components/Others/OthersComponent"
import ContactContainer from "./components/ContactContainer/ContactContainer"

function App() {
  const [contactStyle, setContactStyle] = useState("none")

  return (
    <div className="App slide-top">
      <HeaderCard
        setContactStyle={setContactStyle}
        contactStyle={contactStyle}
      />
      <ContactContainer contactStyle={contactStyle} />
      <SummaryComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <CoursesComponent />
      <OthersComponent />
    </div>
  )
}

export default App
