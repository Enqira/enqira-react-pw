import "./App.css"
import HeaderCard from "./components/HeaderCard/HeaderCard"
import SummaryComponent from "./components/SummaryComponent/SummaryComponent"
import SkillsComponent from "./components/SkillsComponent/SkillsComponent"
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent"
import CoursesComponent from "./components/Courses/CoursesComponent"

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <SummaryComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <CoursesComponent />
    </div>
  )
}

export default App
