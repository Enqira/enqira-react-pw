import React from "react"
import "./SingleProject.css"
import TechComponent from "../TechComponent/TechComponent"

export default function SingleProject({ project }) {
  const { name, description, skills, image, repository, website } = project
  return (
    <div className="single-project-container">
      <h3>{name}</h3>
      <div>
        <img className="projectImg" src={image} alt={name} />
        <img className="projectImg" src={image} alt={name} />
      </div>
      <p>{description}</p>
      <div className="rep-web-links-container">
        <a href={repository} target="_blank" rel="noreferrer">
          <TechComponent arr={["repository"]} />
        </a>
        <a href={website} target="_blank" rel="noreferrer">
          <TechComponent arr={["website"]} />
        </a>
      </div>
      <div className="project-build-with">
        <h4>Build with:</h4>
        <div>
          <TechComponent arr={skills} />
        </div>
      </div>
    </div>
  )
}
