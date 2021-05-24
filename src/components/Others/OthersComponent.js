import React from "react"
import "./OthersComponent.css"
import TechComponent from "../TechComponent/TechComponent"
import TwoLines from "../TwoLines/TwoLinesComponent"

export default function OthersComponent() {
  return (
    <div className="others-container">
      <div className="card">
        <h2>Others</h2>
        <TwoLines title={"Languages"} />
        <div>
          <TechComponent
            arr={[
              "English",
              "Danish",
              "Spanish",
              "Arabic",
              "French",
              "Catalan"
            ]}
          />
        </div>
      </div>
    </div>
  )
}
