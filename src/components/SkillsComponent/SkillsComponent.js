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
    skills: ["MySQL", "mongoDB", "express", "NodeJS", "elasticsearch", "Docker"]
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
