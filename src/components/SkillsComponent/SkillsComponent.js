import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./SkillsComponent.css"
import TechComponent from "../TechComponent/TechComponent"

const arr = [
  {
    group: "Front-end",
    skills: [
      "ReactJS",
      "HTML",
      "CSS",
      "Javascript",
      "storybook",
      "Cordova Ionic"
    ]
  },
  {
    group: "Back-end",
    skills: ["NodeJS", "MySQL", "mongoDB", "elasticsearch", "Docker"]
  },
  {
    group: "Others",
    skills: ["Figma", "Git", "Adobe Suite"]
  }
]

export default function SkillsComponent() {
  return (
    <div className="skills-container">
      <div className="card">
        <h2>Skills</h2>
        {arr.map(item => {
          return (
            <div className="skill-section" key={uuidv4()}>
              <h3>{item.group}</h3>
              <TechComponent arr={item.skills} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// export default function SkillsComponent() {
//   return (
//     <div className="skills-container">
//       <div className="skills-card card">
//         <h2>Skills</h2>
//         <div className="skill-section">
//           <h3>Front-end</h3>
//           <div className="skill-group">
//             <div className="skill-item-container">
//               <img src={reactLogo} alt="github" className="skills-img" />
//               <span>React JS</span>
//             </div>
//             <div className="skill-item-container">
//               <img src={cssLogo} alt="github" className="skills-img" />
//               <span>CSS</span>
//             </div>
//             <div className="skill-item-container">
//               <img src={htmlLogo} alt="github" className="skills-img" />
//               <span>HTML</span>
//             </div>
//             <div className="skill-item-container">
//               <img
//                 src={javascriptLogo}
//                 alt="Javascript"
//                 className="skills-img"
//               />
//               <span>Javascript</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// // }
