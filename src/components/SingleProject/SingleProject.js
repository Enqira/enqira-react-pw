import React from "react"
import "./SingleProject.css"
import TechComponent from "../TechComponent/TechComponent"

export default function SingleProject({ project }) {
  const {
    name,
    description,
    skills,
    image,
    image2,
    repository,
    website,
    repository2
  } = project
  const secondRep = repository2 ? (
    <TechComponent arr={["App repository"]} />
  ) : (
    <div></div>
  )
  return (
    <div className="single-project-container">
      <h3>{name}</h3>
      <div>
        <img className="projectImg" src={image} alt={name} />
        <img className="projectImg" src={image2} alt={name} />
      </div>
      <p>{description}</p>
      <div className="rep-web-links-container">
        <a href={repository} target="_blank" rel="noreferrer">
          <TechComponent arr={["repository"]} />
        </a>
        <a href={repository2} target="_blank" rel="noreferrer">
          {secondRep}
        </a>
        <a href={website} target="_blank" rel="noreferrer">
          <TechComponent arr={["website"]} />
        </a>
      </div>
      <div className="project-build-with">
        <h4>Built with:</h4>
        <div>
          <TechComponent arr={skills} />
        </div>
      </div>
    </div>
  )
}
