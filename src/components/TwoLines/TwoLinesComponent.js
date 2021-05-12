import React from "react"
import "./TwoLines.styles.css"

export default function TwoLines({ title }) {
  return (
    <div className="two-lines-container">
      <hr />
      {title}
      <hr />
    </div>
  )
}
