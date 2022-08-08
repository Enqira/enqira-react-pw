import React from "react";
import "./SingleProject.css";
import TechComponent from "../TechComponent/TechComponent";
import TwoLines from "../TwoLines/TwoLinesComponent";
import ReactPlayer from "react-player/youtube";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import PlayButton from "./PlayButton";

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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000",
    },
  };
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen style={customStyles} ariaHideApp={false}>
      <span onClick={hideModal} className="close-modal">
        Close
      </span>
      <ReactPlayer
        width={"90vw"}
        height={"80vh"}
        url="https://youtu.be/uz0RoVNloPA"
      />
    </ReactModal>
  ));
  return (
    <div className="single-project-container" id={name}>
      <div className="title-img-container">
        <TwoLines title={name} />
        {hasVideo ? (
          <div className="images-container">
            <div className="position-relative-div">
              <PlayButton showModal={showModal} />
              <div className="video-title-container">
                <p>2 min video introduction.</p>
              </div>
              <img
                className="projectImg video-thumbnail"
                src={image}
                alt={name}
              />
            </div>
            <img className="projectImg projectImgVideo" src={image2} alt={name} />
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
