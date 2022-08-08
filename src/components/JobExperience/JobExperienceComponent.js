import React from "react";
import "./JobExperienceComponent.css";
import TwoLines from "../TwoLines/TwoLinesComponent";

export default function JobExperienceComponent() {
  return (
    <dir className="job-experience-container">
      <div className="card">
        <h3>Job Experience</h3>

        <TwoLines title={"SureSMS"} />
        <div>
          <p>
            SureSMS is a professional SMS Gateway, my main role is to integrate their system with third party platforms/systems.
          </p>
          <p>Some of the integrations that I built:</p>
          <ul>
            <li>Azure Active Directory (set of services that connect users with the network resources they need to get their work done)</li>
            <li>Zapier (a workflow automation system)</li>
            <li>ActiveCampaign (a CRM and automation platform)</li>
          </ul>
        </div>
        <TwoLines title={"Aarhus University"} />
        <div>
        </div>
        {/* <p>
            {`Freelance job developing new features for a mock social media website tool to be used for the ERC-funded research project STANDBY, “Standing by: Pro-social Bystander Reactions to Online Political Research”.
            The tool is buit with: NodeJS, ReactJS, Mysql, Redux, Sequelize…
            Current contract will terminate at the end of this year 2021.`}
          </p> */}
        <h4>Freelancer Full Stack Developer</h4>
        <p>Project: Mock Social Media Website Tool</p>

        <p>Responsabilities:</p>
        <ul>
          <li>Development of additional features for the mock Twitter and Facebook:
            <ul>
              <li>Implemented second level comments and replies.</li>
              <li>Developed feature that enables researcher to prespecify comments and replies (including likes, and other kinds of reactions towards these).</li>
              <li>Implemented likes and reactions functionality for comments and replies.</li>
              <li>Implementation of a report functionality for posts, comments and replies.</li>
              <li>Implementation of the ability to upload profile pictures and display them.</li>
            </ul>
          </li>
          <li>Changed the appearance of the mock Twitter and Facebook timelines to more closely resemble the look of real ones.</li>
        </ul>
        <TwoLines title={"HeyWay.com"} />
        <div>
          <p>
            Part time full stack developer.
            <p>Responsibilities: </p>
            <ul>
              <li>Assess Heyway team on best IT solutions.</li>
              <li>Assess Heyway team on best IT solutions.</li>
              <li>Integrate and automate operations.</li>
              <li>Create a new theory test web application for students with ReactJS.</li>
            </ul>
          </p>
        </div>

      </div>
    </dir>
  );
}
