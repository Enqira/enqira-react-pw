import React, { useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import "./TechComponent.css"
import useOnScreen from "../useOnScreen"

import cssLogo from "../../images/frontend/css.png"
import htmlLogo from "../../images/frontend/html.png"
import javascriptLogo from "../../images/frontend/javascript.png"
import reactLogo from "../../images/frontend/react.png"
import storybookLogo from "../../images/frontend/storybook.png"
import cordovaLogo from "../../images/frontend/cordova.png"
import nodeLogo from "../../images/backend/node.png"
import mysqlLogo from "../../images/backend/mysql.png"
import mongoDBLogo from "../../images/backend/mongodb.png"
import dockerLogo from "../../images/backend/docker.png"
import expressLogo from "../../images/backend/express.png"
import elasticLogo from "../../images/others/elasticsearch.png"
import firgmaLogo from "../../images/others/figma.png"
import gitLogo from "../../images/git-logo.png"
import adobeLogo from "../../images/others/adobe.png"
import repositoryLogo from "../../images/repository.png"
import linkLogo from "../../images/link.png"
import spanishLogo from "../../images/flags/spanish.png"
import frenchLogo from "../../images/flags/french.png"
import arabicLogo from "../../images/flags/arabic.png"
import danishLogo from "../../images/flags/danish.png"
import englishLogo from "../../images/flags/english.png"
import catalanLogo from "../../images/flags/catalan.png"

const data = [
  { name: "ReactJS", path: reactLogo },
  {
    name: "HTML",
    path: htmlLogo
  },
  {
    name: "CSS",
    path: cssLogo
  },
  {
    name: "Javascript",
    path: javascriptLogo
  },
  {
    name: "storybook",
    path: storybookLogo
  },
  {
    name: "Cordova Ionic",
    path: cordovaLogo
  },
  {
    name: "NodeJS",
    path: nodeLogo
  },
  {
    name: "MySQL",
    path: mysqlLogo
  },
  {
    name: "mongoDB",
    path: mongoDBLogo
  },
  {
    name: "Docker",
    path: dockerLogo
  },
  {
    name: "elasticsearch",
    path: elasticLogo
  },
  {
    name: "Figma",
    path: firgmaLogo
  },
  {
    name: "Adobe Suite",
    path: adobeLogo
  },
  {
    name: "Git",
    path: gitLogo
  },
  {
    name: "website",
    path: linkLogo
  },
  {
    name: "repository",
    path: repositoryLogo
  },
  {
    name: "App repository",
    path: repositoryLogo
  },
  {
    name: "express",
    path: expressLogo
  },
  {
    name: "HackYourFuture.dk",
    path: linkLogo
  },
  {
    name: "See certificate",
    path: linkLogo
  },
  {
    name: "Spanish",
    path: spanishLogo
  },
  {
    name: "French",
    path: frenchLogo
  },
  {
    name: "English",
    path: englishLogo
  },
  {
    name: "Arabic",
    path: arabicLogo
  },
  {
    name: "Catalan",
    path: catalanLogo
  },
  {
    name: "Danish",
    path: danishLogo
  }
]

export default function TechComponent({ arr }) {
  const ref = useRef(null)
  const newArr = arr.map(item => data.filter(skill => skill.name === item))

  return (
    <div className="tech-group" style={useOnScreen(ref)} ref={ref}>
      {newArr.map(item =>
        item.map(skill => {
          return (
            <div className="tech-item-container" key={uuidv4()}>
              <img src={skill.path} alt={skill.name} className="techs-img" />
              <span>{skill.name}</span>
            </div>
          )
        })
      )}
    </div>
  )
}
