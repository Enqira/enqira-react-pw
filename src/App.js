import "./App.css"
import HeaderCard from "./components/HeaderCard/HeaderCard"
import SummaryComponent from "./components/SummaryComponent/SummaryComponent"
import SkillsComponent from "./components/SkillsComponent/SkillsComponent"
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent"

function App() {
  return (
    <div className="App">
      <HeaderCard />
      <SummaryComponent />
      <SkillsComponent />
      <ProjectsComponent />
    </div>
  )
}

export default App
