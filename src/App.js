import "./App.css"
import HeaderCard from "./components/HeaderCard/HeaderCard"
import SummaryComponent from "./components/SummaryComponent/SummaryComponent"
import SkillsComponent from "./components/SkillsComponent/SkillsComponent"
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent"
import CoursesComponent from "./components/Courses/CoursesComponent"
import OthersComponent from "./components/Others/OthersComponent"

function App() {
  return (
    <div className="App slide-top">
      <HeaderCard />
      <SummaryComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <CoursesComponent />
      <OthersComponent />
    </div>
  )
}

export default App
