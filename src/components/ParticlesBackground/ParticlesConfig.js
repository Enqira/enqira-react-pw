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

const particlesConfig = {
  fullScreen: { enable: true, zIndex: 1 },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas"
  },
  particles: {
    color: { value: "#ffffff" },
    lineLinked: {
      blink: false,
      color: "#ffffff",
      consent: true,
      distance: 200,
      enable: true,
      width: 1
    },
    move: {
      bounce: false,
      enable: true,
      outMode: "out",
      random: true,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, area: 800 }, limit: 0, value: 30 },
    opacity: {
      value: 0.75,
      random: false,
      anim: {
        enable: false
      }
    },
    rotate: {
      animation: { enable: true, speed: 1, sync: false },
      direction: "random",
      random: true,
      value: 0
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: [
        {
          src: cssLogo,
          width: 25,
          height: 25
        },
        {
          src: htmlLogo,
          width: 25,
          height: 25
        },
        {
          src: javascriptLogo,
          width: 25,
          height: 25
        },
        {
          src: reactLogo,
          width: 25,
          height: 25
        },
        {
          src: storybookLogo,
          width: 25,
          height: 25
        },
        {
          src: cordovaLogo,
          width: 25,
          height: 25
        },
        {
          src: nodeLogo,
          width: 25,
          height: 25
        },
        {
          src: mysqlLogo,
          width: 25,
          height: 25
        },
        {
          src: mongoDBLogo,
          width: 25,
          height: 25
        },
        {
          src: dockerLogo,
          width: 25,
          height: 25
        },
        {
          src: expressLogo,
          width: 25,
          height: 25
        },
        {
          src: elasticLogo,
          width: 25,
          height: 25
        },
        {
          src: firgmaLogo,
          width: 25,
          height: 25
        },
        {
          src: gitLogo,
          width: 25,
          height: 25
        },
        {
          src: adobeLogo,
          width: 25,
          height: 25
        }
      ],
      polygon: { sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "image"
    },

    size: {
      animation: {
        enable: false,
        minimumValue: 5,
        speed: 5,
        sync: false
      },
      random: false,
      value: 13
    }
  }
}

export default particlesConfig
