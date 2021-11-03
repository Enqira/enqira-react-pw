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

// const particlesConfig = {
//   particles: {
//     number: {
//       value: 40,
//       density: {
//         enable: true,
//         value_area: 1000,
//       },
//     },
//     color: {
//       value: "#fff",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.3,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 250,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 0.15,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: false,
//         mode: "repulse",
//       },
//       onclick: {
//         enable: false,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 800,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
// };
// export default particlesConfig;

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
      distance: 50,
      enable: true,
      width: 4000,
    },
    move: {
      bounce: true,
      enable: true,
      outMode: "out",
      random: true,
      speed: 0.1,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, limit: 0, value: 30 },
    opacity: {
      value: 0.75,
      random: false,
      anim: {
        enable: false,
      },
    },
    rotate: {
      animation: { enable: false, speed: 0.1, sync: false },
      direction: "random",
      random: true,
      value: 0,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      polygon: { sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "image",
    },

    size: {
      animation: {
        enable: false,
        minimumValue: 5,
        speed: 5,
        sync: false,
      },
      random: false,
      value: 13,
    },
  },
};

export default particlesConfig;
