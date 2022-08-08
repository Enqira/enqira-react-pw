import cssLogo from "../../images/frontend/css.png";
import htmlLogo from "../../images/frontend/html.png";
import javascriptLogo from "../../images/frontend/javascript.png";
import reactLogo from "../../images/frontend/react.png";
import storybookLogo from "../../images/frontend/storybook.png";
import cordovaLogo from "../../images/frontend/cordova.png";
import nodeLogo from "../../images/backend/node.png";
import mysqlLogo from "../../images/backend/mysql.png";
import mongoDBLogo from "../../images/backend/mongodb.png";
import dockerLogo from "../../images/backend/docker.png";
import expressLogo from "../../images/backend/express.png";
import elasticLogo from "../../images/others/elasticsearch.png";
import firgmaLogo from "../../images/others/figma.png";
import githubLogo from "../../images/github.png";
import adobeLogo from "../../images/others/adobe.png";
import swaggerLogo from "../../images/others/swagger.png";
import gitLogo from "../../images/others/git.png";
import sequelizeLogo from "../../images/backend/sequelize.png";
import reduxLogo from "../../images/frontend/redux.png";
import webflowLogo from "../../images/others/webflow.png";

const particlesConfig = {
  fullScreen: { enable: true, zIndex: 1 },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
  },
  particles: {
    color: { value: "#ffffff" },
    lineLinked: {
      blink: false,
      color: "#ffffff",
      consent: true,
      distance: 300,
      enable: false,
      width: 1,
    },

    move: {
      bounce: true,
      enable: true,
      outMode: "out",
      random: false,
      speed: 0.6,
      straight: true,
      direction: "bottom",
    },
    number: { density: { enable: true, area: 800 }, limit: 0, value: 18 },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
      },
    },
    rotate: {
      animation: { enable: true, speed: 3, sync: false },
      direction: "random",
      random: true,
      value: 1,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: [
        {
          src: webflowLogo,
          width: 32,
          height: 32,
        },
        {
          src: reduxLogo,
          width: 32,
          height: 32,
        },
        {
          src: cssLogo,
          width: 32,
          height: 32,
        },
        {
          src: sequelizeLogo,
          width: 32,
          height: 32,
        },
        {
          src: htmlLogo,
          width: 32,
          height: 32,
        },
        {
          src: javascriptLogo,
          width: 32,
          height: 32,
        },
        {
          src: reactLogo,
          width: 32,
          height: 32,
        },
        {
          src: storybookLogo,
          width: 32,
          height: 32,
        },
        {
          src: cordovaLogo,
          width: 32,
          height: 32,
        },
        {
          src: nodeLogo,
          width: 32,
          height: 32,
        },
        {
          src: mysqlLogo,
          width: 32,
          height: 32,
        },
        {
          src: mongoDBLogo,
          width: 32,
          height: 32,
        },
        {
          src: dockerLogo,
          width: 32,
          height: 32,
        },
        {
          src: expressLogo,
          width: 32,
          height: 32,
        },
        {
          src: elasticLogo,
          width: 32,
          height: 32,
        },
        {
          src: firgmaLogo,
          width: 32,
          height: 32,
        },
        {
          src: gitLogo,
          width: 32,
          height: 32,
        },
        {
          src: githubLogo,
          width: 32,
          height: 32,
        },
        {
          src: adobeLogo,
          width: 32,
          height: 32,
        },
        {
          src: swaggerLogo,
          width: 32,
          height: 32,
        },
      ],
      polygon: { sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "image",
    },

    size: {
      animation: {
        enable: true,
        minimumValue: 15,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 20,
    },
  },
};

export default particlesConfig;

// const particlesConfig = {
//   fullScreen: { enable: true, zIndex: 1 },
//   detectRetina: true,
//   fpsLimit: 60,
//   interactivity: {
//     detectsOn: "canvas",
//   },
//   particles: {
//     color: { value: "#ffffff" },
//     lineLinked: {
//       blink: false,
//       color: "#ffffff",
//       consent: true,
//       distance: 50,
//       enable: true,
//       width: 4000,
//     },
//     move: {
//       bounce: true,
//       enable: true,
//       outMode: "out",
//       random: true,
//       speed: 0.1,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, limit: 0, value: 30 },
//     opacity: {
//       value: 0.75,
//       random: false,
//       anim: {
//         enable: false,
//       },
//     },
//     rotate: {
//       animation: { enable: false, speed: 0.1, sync: false },
//       direction: "random",
//       random: true,
//       value: 0,
//     },
//     shape: {
//       character: {
//         fill: false,
//         font: "Verdana",
//         style: "",
//         value: "*",
//         weight: "400",
//       },
//       polygon: { sides: 5 },
//       stroke: { color: "#000000", width: 0 },
//       type: "image",
//     },

//     size: {
//       animation: {
//         enable: false,
//         minimumValue: 5,
//         speed: 5,
//         sync: false,
//       },
//       random: false,
//       value: 13,
//     },
//   },
// };

// export default particlesConfig;
