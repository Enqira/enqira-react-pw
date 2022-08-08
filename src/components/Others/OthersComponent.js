import React from "react"
import "./OthersComponent.css"
import TechComponent from "../TechComponent/TechComponent"
import TwoLines from "../TwoLines/TwoLinesComponent"

export default function OthersComponent() {
  return (
    <div className="others-container">
      <div className="card">
        <h3>Others</h3>
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
