import React from "react"
import "./OthersComponent.css"
import TechComponent from "../TechComponent/TechComponent"

export default function OthersComponent() {
  return (
    <div className="others-container">
      <div className="card">
        <h2>Others</h2>
        <h3>Languages</h3>
        <h4>Full Proficiency:</h4>
        <div>
          <TechComponent arr={["Arabic", "Spanish", "English"]} />
        </div>
        <h4>Medium Proficiency:</h4>
        <div>
          <TechComponent arr={["Danish", "French", "Catalan"]} />
        </div>
      </div>
    </div>
  )
}
