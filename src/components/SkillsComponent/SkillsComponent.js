import React from "react"
import "./SkillsComponent.css"
import cssLogo from "../../images/frontend/css.png"
import htmlLogo from "../../images/frontend/html.png"
import javascriptLogo from "../../images/frontend/javascript.png"
import reactLogo from "../../images/frontend/react.png"
import storybookLogo from "../../images/frontend/storybook.png"
import cordovaLogo from "../../images/frontend/cordova.png"
import nodeLogo from "../../images/backend/node.png"
import mysqlLogo from "../../images/backend/mysql.png"
import mongoDBLogo from "../../images/backend/mongodb.png"
import dockerLogo from "../../images/backend/docker.png"
import elasticLogo from "../../images/others/elasticsearch.png"
import firgmaLogo from "../../images/others/figma.png"
import adobeLogo from "../../images/others/adobe.png"
import gitLogo from "../../images/git-logo.png"

const arr = [
  {
    group: "Front-end",
    skills: [
      [reactLogo, "ReactJS"],
      [htmlLogo, "HTML"],
      [cssLogo, "CSS"],
      [javascriptLogo, "Javascript"],
      [storybookLogo, "storybook"],
      [cordovaLogo, "Cordova Ionic"]
    ]
  },
  {
    group: "Back-end",
    skills: [
      [javascriptLogo, "Javascript"],
      [nodeLogo, "NodeJS"],
      [mysqlLogo, "MySQL"],
      [mongoDBLogo, "mongoDB"],
      [dockerLogo, "Docker"]
    ]
  },
  {
    group: "Others",
    skills: [
      [elasticLogo, "elasticsearch"],
      [firgmaLogo, "Figma"],
      [adobeLogo, "Adobe Suite"],
      [gitLogo, "Git"]
    ]
  }
]

export default function SkillsComponent() {
  return (
    <div className="skills-container">
      <div className="skills-card card">
        <h2>Skills</h2>
        {arr.map(item => {
          return (
            <div className="skill-section">
              <h3>{item.group}</h3>
              <div className="skill-group">
                {item.skills.map(skill => {
                  return (
                    <div className="skill-item-container">
                      <img
                        src={skill[0]}
                        alt={skill[1]}
                        className="skills-img"
                      />
                      <span>{skill[1]}</span>
                    </div>
                  )
                })}
              </div>
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
