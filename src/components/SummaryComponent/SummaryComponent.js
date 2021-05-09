import React from "react"
import "./Summary.styles.css"
import CodingSVG from "../BackgroundSVG/CodingSVG"

export default function SummaryComponent() {
  return (
    <div className="summary-container">
      <div className="summary-card card">
        <h2>Summary</h2>
        <div className="p-svg-container">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{" "}
          </p>
          <CodingSVG />
        </div>
      </div>
    </div>
  )
}
