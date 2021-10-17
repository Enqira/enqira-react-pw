import React from "react";
import "./JobExperienceComponent.css";
import TwoLines from "../TwoLines/TwoLinesComponent";

export default function JobExperienceComponent() {
  return (
    <dir className="job-experience-container">
      <div className="card">
        <h2>Job Experience</h2>
        <TwoLines title={"HeyWay.com (current)"} />
        <div>
          <p>
            {`Part time full stack developer working in a new project using React and Node.js, and parcially making small changes to the already existing website and small app or adding new small features. Website is built with Webflow, app uses Vue.js and laravel backend.`}
          </p>
        </div>
        <TwoLines title={"Fixpress"} />
        <div>
          <p>
            {`Fixpress was a small computer & mobile repair shop. My role was to repair electronics and attend to clients.`}
          </p>
        </div>
        <TwoLines title={"Brink Transport"} />
        <div>
          <p>
            Brink transport is a Danish transport company. My daily activities
            at the company changed every day depending on the needs, some of the
            roles that I had consisted of: help plan the route for the drivers
            in Sjælland, sort goods, deliver packages, drive trucks to the
            mechanic for service or reparation, among other things.
          </p>
        </div>
        <TwoLines title={"PcBox/Let's Play"} />
        <div>
          <p>
            {`
PcBox/Let's Play is an Esport center with 110 robust gaming computers and 8 PlayStations.
 My role consisted of helping build and maintain the center computers, install and patch games,
  and restock goods.`}
          </p>
        </div>
      </div>
    </dir>
  );
}
