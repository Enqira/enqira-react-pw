import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./ProjectsComponent.css"
import SingleProject from "../SingleProject/SingleProject.js"
import invitaImg from "../../images/projects/invita-screen1.png"
import invita2Img from "../../images/projects/invita-screen2.png"
import cloudpackImg from "../../images/projects/cloudpack-1.png"
import cloudpack2Img from "../../images/projects/cloudpack-2.png"

const arr = [
  {
    name: "invita",
    image: invitaImg,
    image2: invita2Img,
    description:
      "Website for sharing meals. Invite your best friends or your family for dinner, you can add reserve or review meals.",
    skills: ["MySQL", "express", "ReactJS", "NodeJS"],
    repository: "https://github.com/Enqira/meal-sharing",
    website: "https://invita.herokuapp.com/"
  },
  {
    name: "Cloudpack",
    image: cloudpackImg,
    image2: cloudpack2Img,
    description:
      "A fully working system consisting of an app & an admin website to track damaged packages. You can use the app to scan the barcode, add a comment & take pictures of the damage, & use the admin website to review it, send it by email, see them all, & more. ",
    skills: [
      "mongoDB",
      "express",
      "Cordova Ionic",
      "NodeJS",
      "HTML",
      "CSS",
      "Javascript"
    ],
    repository: "https://github.com/Enqira/Skadepot-Server/",
    repository2: "https://github.com/Enqira/Skadepot/",
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
