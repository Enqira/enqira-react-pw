import React, { useRef, useState, useEffect } from "react"
import "./HeaderCard.css"
import profileImg from "../../images/profile-img.png"
import githubLogo from "../../images/github.svg"
import linkedinLogo from "../../images/linkedin.svg"
import emailLogo from "../../images/mail.svg"

export default function HeaderCard({
  setContactStyle,
  contactStyle,
  setEffectState
}) {
  const [cardStyle, setCardStyle] = useState()
  const containerRef = useRef()
  const picBackRef = useRef()
  const btnRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const picRef = useRef()
  //   ref to make scroll to contact card
  const contactRef = useRef()
  const downloadRef = useRef()
  const handleContactClick = () => {
    //   make contact card apear
    contactStyle === "none" ? setContactStyle("flex") : setContactStyle("none")
    // scroll to contact card
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }
  //   handle on click download CV
  const downloadCV = () => {
    console.log("clicked")
  }

  useEffect(() => {
    //   add event listener of mouse movement inside container
    containerRef.current.addEventListener("mousemove", e => {
      const xAxes = -((window.innerWidth / 2 - e.pageX) / 80)
      const yAxes = (window.innerHeight / 2 - e.pageY) / 80
      setCardStyle({
        transform: `rotateX(${yAxes}deg) rotateY(${xAxes}deg)`
      })
    })

    //  add event listener to know when the mouse entered the container
    containerRef.current.addEventListener("mouseenter", e => {
      picRef.current.style.transform =
        "scaleX(0.9) scaleY(0.9) translateZ(30px)"
      titleRef.current.style.transform = "translateZ(150px)"
      descriptionRef.current.style.transform = "translateZ(80px)"
      btnRef.current.style.transform = "translateZ(100px)"

      picBackRef.current.style.width = "155px"
      picBackRef.current.style.height = "155px"

      downloadRef.current.style.transform = "translateZ(100px)"
    })

    // add event listener to make card turn to initial rotation when mouse leavs container
    containerRef.current.addEventListener("mouseleave", e => {
      setCardStyle({
        transform: `rotateX(0deg) rotateY(0deg)`,
        transition: "all 0.5s ease"
      })
      picRef.current.style.transform = "scaleX(0.8) scaleY(0.8) translateZ(0)"

      titleRef.current.style.transform = "translateZ(0)"
      descriptionRef.current.style.transform = "translateZ(0)"
      btnRef.current.style.transform = "translateZ(0)"

      picBackRef.current.style.width = "160px"
      picBackRef.current.style.height = "160px"

      downloadRef.current.style.transform = "translateZ(0)"
    })
    // remove the event listeners, otherwise a lot of event listener will be created, and may slow down computer
    containerRef.current.removeEventListener("mousemove", () => {})
    containerRef.current.removeEventListener("mouseleave", () => {})
    containerRef.current.removeEventListener("mouseenter", () => {})
  }, [])

  return (
    <div className="header-container" ref={containerRef}>
      <div className="header-card card" style={cardStyle}>
        <div className="header-img-container">
          <div className="header-circle" ref={picBackRef}></div>
          <img
            className="profile-img"
            src={profileImg}
            alt="profile"
            ref={picRef}
          />
        </div>
        <div className="header-info">
          <h1 className="header-title" ref={titleRef}>
            MOHAMMED ENQIRA
          </h1>

          <p ref={descriptionRef}>
            Motivated and fast learner Web Developer who enjoys solving problems
            and building projects.
          </p>
          <div className="header-links" ref={btnRef}>
            <a
              href="https://www.github.com/enqira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/enqira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="linkedin" />
            </a>
            <img src={emailLogo} alt="email" onClick={handleContactClick} />
          </div>
          <div className="download-button-container" ref={downloadRef}>
            <button
              className="download-button"
              onClick={downloadCV}
              ref={contactRef}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
