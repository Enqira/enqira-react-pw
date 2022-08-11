import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./ProjectsComponent.css";
import SingleProject from "../SingleProject/SingleProject.js";
import invitaImg from "../../images/projects/invita-screen1.png";
import invita2Img from "../../images/projects/invita-screen2.png";
import cloudpackImg from "../../images/projects/cloudpack-1.png";
import guideIT1 from "../../images/projects/guide-it-1.png";
import guideIT2 from "../../images/projects/guide-it-2.png";
import videoThumbnail from "../../images/projects/video-tha.jpg";
import Derassi1 from "../../images/projects/derassi.png";
import Derassi2 from "../../images/projects/derassi2.png";


const arr = [
  {
    name: "Derassiabogados.es",
    hasVideo: false,
    image: Derassi1,
    image2: Derassi2,
    description:
      "A lawyer website for a family member with CMS for news and services.",
    skills: [
      "MySQL",
      "ReactJS",
      "NodeJS",
      "strapi",
      "HTML",
      "CSS",
      "Javascript",
      "Figma",
      "Adobe Suite"
    ],
    repository: null,
    website: "https://derassiabogados.es/",
  },
  {
    name: "Cloudpack",
    hasVideo: true,
    image: videoThumbnail,
    image2: cloudpackImg,
    description:
      "A system consisting of an app & an admin panel to track damaged packages. The app can be used to scan a barcode, add a comment & take pictures of the damaged package, to later visualize that data on the admin panel.",
    skills: [
      "mongoDB",
      "express",
      "Cordova Ionic",
      "NodeJS",
      "HTML",
      "CSS",
      "Javascript",
    ],
    repository: "https://github.com/Enqira/Skadepot-Server/",
    repository2: "https://github.com/Enqira/Skadepot/",
    website: "http://cp.enqira.com/",
  },
  {
    name: "Guide-IT",
    hasVideo: false,
    image: guideIT2,
    image2: guideIT1,
    description:
      "Part of HackYourFuture final group project and in collaboration with REDI school, during 7 weeks of work we developed a tool to help newcomers find their professional way in Denmark.",
    skills: [
      "MySQL",
      "express",
      "ReactJS",
      "NodeJS",
      "Storybook",
      "Figma",
      "Swagger",
    ],
    repository: "https://github.com/HackYourFuture-CPH/Guide-IT",
    website: "https://guide-it-production.herokuapp.com/",
  },
  {
    name: "invita",
    hasVideo: false,
    image: invitaImg,
    image2: invita2Img,
    description:
      "Website for sharing meals. Invite your best friends or your family for dinner, you can add, reserve or review meals.",
    skills: ["MySQL", "express", "ReactJS", "NodeJS"],
    repository: "https://github.com/Enqira/meal-sharing",
    website: "https://invita.herokuapp.com/",
  },
];

export default function ProjectsComponent() {
  return (
    <div className="projects-container">
      <div className="projects-card card">
        <h3>Projects</h3>
        <p className="projects-warning">
          Note: The porpuse of these projects was to put in practice what I was
          learning, and I have improved my coding skills since then!
        </p>
        {arr.map((project) => {
          return <SingleProject project={project} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}
