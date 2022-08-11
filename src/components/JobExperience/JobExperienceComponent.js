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
          <div>
            Part time full stack developer.
            <p>Responsibilities: </p>
            <ul>
              <li>Assess Heyway team on best IT solutions.</li>
              <li>Assess Heyway team on best IT solutions.</li>
              <li>Integrate and automate operations.</li>
              <li>Create a new theory test web application for students with ReactJS.</li>
            </ul>
          </div>
        </div>

      </div>
    </dir>
  );
}
