import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./ProjectsComponent.css"
import SingleProject from "../SingleProject/SingleProject.js"
import invitaImg from "../../images/projects/invita1.png"

const arr = [
  {
    name: "invita",
    image: invitaImg,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    skills: ["MySQL", "express", "ReactJS", "NodeJS"],
    repository: "https://github.com/Enqira/meal-sharing",
    website: "https://invita.herokuapp.com/"
  },
  {
    name: "Cloudpack",
    image: invitaImg,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    skills: [
      "mongoDB",
      "express",
      "Cordova Ionic",
      "NodeJS",
      "HTML",
      "CSS",
      "Javascript"
    ],
    repository: "https://github.com/Enqira/meal-sharing",
    repository2: "https://github.com/Enqira/meal-sharing",
    website: "http://cp.enqira.com/"
  }
]

export default function ProjectsComponent() {
  return (
    <div className="projects-container">
      <div className="card">
        <h2>Projects</h2>
        {arr.map(project => {
          return <SingleProject project={project} key={uuidv4()} />
        })}
      </div>
    </div>
  )
}
