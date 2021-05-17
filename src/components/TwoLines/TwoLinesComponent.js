import React from "react"
import "./TwoLines.styles.css"

export default function TwoLines({ title }) {
  return (
    <div className="container">
      <hr className="hr-text" data-content={title} />
    </div>
  )
}
