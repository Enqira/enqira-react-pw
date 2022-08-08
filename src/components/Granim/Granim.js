import React, { useEffect } from "react";
import Granim from "granim";
import "./Granim.css";

const GranimComp = () => {
  useEffect(() => {
    new Granim({
      element: "#granim-canvas",
      direction: "top-bottom",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#2a2d38", "#2a2d38"],
            ["#000000", "#2a2d38"],
            ["#000000", "#000000"],            
            ["#2a2d38", "#000000"],            
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);

  return (
      <canvas id="granim-canvas" />   
  );
};

export default GranimComp;

// gradients: [
//     ["#82889A", "#5E667D"],
//     ["#2C3246", "#454D66"],
//     ["#080E1E", "#12192B"],
//   ],