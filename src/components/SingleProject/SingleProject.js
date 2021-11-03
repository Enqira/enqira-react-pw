import React from "react";
import "./SingleProject.css";
import TechComponent from "../TechComponent/TechComponent";
import TwoLines from "../TwoLines/TwoLinesComponent";
import ReactPlayer from "react-player/youtube";

export default function SingleProject({ project }) {
  const {
    name,
    description,
    skills,
    image,
    image2,
    repository,
    website,
    repository2,
    hasVideo,
  } = project;
  const secondRep = repository2 ? (
    <TechComponent arr={["App repository"]} />
  ) : (
    <div></div>
  );
  return (
    <div className="single-project-container" id={name}>
      <div className="title-img-container">
        <TwoLines title={name} />
        {hasVideo ? (
          <div className="images-container">
            <ReactPlayer
              className="projectImg"
              height={"inherit"}
              url="https://youtu.be/uz0RoVNloPA"
            />{" "}
            <img className="projectImg" src={image} alt={name} />
          </div>
        ) : (
          <div>
            <img className="projectImg" src={image2} alt={name} />
            <img className="projectImg" src={image} alt={name} />
          </div>
        )}
      </div>
      <p>{description}</p>
      <div className="rep-web-links-container">
        <a href={repository} target="_blank" rel="noreferrer">
          <TechComponent arr={["Repository"]} />
        </a>
        <a href={repository2} target="_blank" rel="noreferrer">
          {secondRep}
        </a>
        <a href={website} target="_blank" rel="noreferrer">
          <TechComponent arr={["Website"]} />
        </a>
      </div>
      <div className="project-build-with">
        <h4>Built with:</h4>
        <div>
          <TechComponent arr={skills} />
        </div>
      </div>
    </div>
  );
}
