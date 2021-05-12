import React from "react"
import "./Summary.styles.css"
import CodingSVG from "../BackgroundSVG/CodingSVG"

export default function SummaryComponent({
  contactStyle,
  setContactStyle,
  contactRef
}) {
  const handleClick = () => {
    //   make contact card apear
    // scroll to contact card
    if (contactStyle === "none") {
      setContactStyle("flex")
    }
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="summary-container">
      <div className="summary-card card">
        <h2>Summary</h2>
        <div className="p-svg-container">
          <p>
            {`Enthusiastic and creative technologist with good computer science
            fundamentals knowledge & hands-on skills in a wide range of
            software and tools. I like solving back-end problems as much as
            creating modern, beautiful and responsive front-end websites. My go
            to back-end plataform is NodeJS and front-end library is React, but
            I will be happy to jump in a very short time to any required ones.`}
          </p>
          <CodingSVG />
        </div>
        <div className="contact-btn-container">
          <button className="contact-btn" onClick={handleClick}>
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
