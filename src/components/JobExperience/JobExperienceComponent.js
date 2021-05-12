import React from "react"
import "./JobExperienceComponent.css"

export default function JobExperienceComponent() {
  return (
    <dir className="job-experience-container">
      <div className="card">
        <h2>Job Experience</h2>
        <h3>Fixpress</h3>
        <div>
          <p>
            {`Fixpress was a small computer & mobile repair shop. My role was to repair electronics and attend clients.`}
          </p>
        </div>
        <h3>PcBox/Let's Play</h3>
        <div>
          <p>
            {`
PcBox/Let's Play is an Esport center with 110 robust gaming computers and 8 PlayStations. My role consisted of help build and maintain the center computers, install and patch games, and fix issues that could occur in the network.`}
          </p>
        </div>
        <h3>Brink Transport</h3>
        <div>
          <p>
            Brink transport is a danish transport company. My daily activities
            at the company changed every day depending of the needs, some of the
            roles that I had conisted of help plan the route for the drivers in
            Sjælland, sort goods, deliver packages, drive trucks to mechanics
            for service or reparation among other things.
          </p>
        </div>
      </div>
    </dir>
  )
}
