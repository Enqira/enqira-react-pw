import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TechComponent.css";
import useOnScreen from "../useOnScreen";

import cssLogo from "../../images/frontend/css.png";
import htmlLogo from "../../images/frontend/html.png";
import javascriptLogo from "../../images/frontend/javascript.png";
import reactLogo from "../../images/frontend/react.png";
import storybookLogo from "../../images/frontend/storybook.png";
import cordovaLogo from "../../images/frontend/cordova.png";
import reduxLogo from "../../images/frontend/redux.png";
import nodeLogo from "../../images/backend/node.png";
import mysqlLogo from "../../images/backend/mysql.png";
import mongoDBLogo from "../../images/backend/mongodb.png";
import dockerLogo from "../../images/backend/docker.png";
import expressLogo from "../../images/backend/express.png";
import linuxLogo from "../../images/backend/linux.png";
import sequelizeLogo from "../../images/backend/sequelize.png";
import elasticLogo from "../../images/others/elasticsearch.png";
import firgmaLogo from "../../images/others/figma.png";
import githubLogo from "../../images/github.png";
import gitLogo from "../../images/others/git.png";
import adobeLogo from "../../images/others/adobe.png";
import swaggerLogo from "../../images/others/swagger.png";
import webflowLogo from "../../images/others/webflow.png";
import linkLogo from "../../images/link.png";
import spanishLogo from "../../images/flags/spanish.png";
import frenchLogo from "../../images/flags/french.png";
import arabicLogo from "../../images/flags/arabic.png";
import danishLogo from "../../images/flags/danish.png";
import englishLogo from "../../images/flags/english.png";
import catalanLogo from "../../images/flags/catalan.png";

import NETLogo from "../../images/backend/NET.png";
import CSharpLogo from "../../images/backend/c-sharp.png";
import StrapiLogo from "../../images/backend/strapi-logo.svg";


const data = [
  {
    name: "ReactJS",
    path: reactLogo
  },
  {
    name: "HTML",
    path: htmlLogo,
  },
  {
    name: "Webflow",
    path: webflowLogo,
  },
  {
    name: "CSS",
    path: cssLogo,
  },
  {
    name: "Javascript",
    path: javascriptLogo,
  },
  {
    name: "Storybook",
    path: storybookLogo,
  },
  {
    name: "Cordova Ionic",
    path: cordovaLogo,
  },
  {
    name: "Redux",
    path: reduxLogo,
  },
  {
    name: "NodeJS",
    path: nodeLogo,
  },
  {
    name: "MySQL",
    path: mysqlLogo,
  },
  {
    name: "mongoDB",
    path: mongoDBLogo,
  },
  {
    name: "Docker",
    path: dockerLogo,
  },
  {
    name: "elasticsearch",
    path: elasticLogo,
  },
  {
    name: "Sequelize",
    path: sequelizeLogo,
  },
  {
    name: "Figma",
    path: firgmaLogo,
  },
  {
    name: "Adobe Suite",
    path: adobeLogo,
  },
  {
    name: "Git",
    path: gitLogo,
  },
  {
    name: "Website",
    path: linkLogo,
  },
  {
    name: "Repository",
    path: githubLogo,
  },
  {
    name: "App repository",
    path: githubLogo,
  },
  {
    name: "express",
    path: expressLogo,
  },
  {
    name: "Linux",
    path: linuxLogo,
  },
  {
    name: "Swagger",
    path: swaggerLogo,
  },
  {
    name: ".NET",
    path: NETLogo,
  },
  {
    name: "C-sharp",
    path: CSharpLogo,
  },
  {
    name: "Strapi",
    path: StrapiLogo,
  },
  {
    name: "HackYourFuture.dk",
    path: linkLogo,
  },
  {
    name: "See certificate",
    path: linkLogo,
  },
  {
    name: "Spanish",
    path: spanishLogo,
  },
  {
    name: "French",
    path: frenchLogo,
  },
  {
    name: "English",
    path: englishLogo,
  },
  {
    name: "Arabic",
    path: arabicLogo,
  },
  {
    name: "Catalan",
    path: catalanLogo,
  },
  {
    name: "Danish",
    path: danishLogo,
  },
];

export default function TechComponent({ arr }) {
  const ref = useRef(null);
  const newArr = arr.map((item) => data.filter((skill) => skill.name === item));

  return (
    <div className="tech-group" style={useOnScreen(ref)} ref={ref}>
      {newArr.map((item) =>
        item.map((skill) => {
          return (
            <div className="tech-item-container" key={uuidv4()}>
              <img src={skill.path} alt={skill.name} className="techs-img" />
              <span>{skill.name}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
