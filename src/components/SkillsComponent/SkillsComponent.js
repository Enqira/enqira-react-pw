import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./SkillsComponent.css"
import TechComponent from "../TechComponent/TechComponent"
import TwoLines from "../TwoLines/TwoLinesComponent"

const arr = [
  {
    group: "Front-end",
    skills: [
      "ReactJS",
      "HTML",
      "CSS",
      "Javascript",
      "Storybook",
      "Cordova Ionic"
    ]
  },
  {
    group: "Back-end",
    skills: ["MySQL", "mongoDB", "express", "NodeJS", "elasticsearch", "Docker"]
  },
  {
    group: "Others",
    skills: ["Figma", "Git", "Adobe Suite", "Swagger"]
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
              {/* <h3>{item.group}</h3> */}
              <TwoLines title={item.group} />
              <TechComponent arr={item.skills} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
