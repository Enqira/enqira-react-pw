import React, { useRef, useState, useEffect } from "react"
import "./HeaderCard.css"
import profileImg from "../../images/profile-img.png"
import githubLogo from "../../images/git-logo.png"
import linkedinLogo from "../../images/linkedin-logo.png"
import emailLogo from "../../images/email-logo.png"

export default function HeaderCard() {
  const [cardStyle, setCardStyle] = useState()
  const containerRef = useRef()
  const picBackRef = useRef()
  const btnRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const picRef = useRef()

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
        "scaleX(0.9) scaleY(0.9) translateZ(50px)"
      titleRef.current.style.transform = "translateZ(200px)"
      descriptionRef.current.style.transform = "translateZ(80px)"
      btnRef.current.style.transform = "translateZ(100px)"

      picBackRef.current.style.width = "155px"
      picBackRef.current.style.height = "155px"
    })

    // add event listener to make card turn to initial rotation when mouse leavs container
    containerRef.current.addEventListener("mouseleave", e => {
      setCardStyle({
        transform: `rotateX(0deg) rotateY(0deg)`,
        transition: "all 0.5s ease"
      })
      picRef.current.style.transform = "scaleX(0.8) scaleY(0.8) translateZ(0px)"

      titleRef.current.style.transform = "translateZ(0px)"
      descriptionRef.current.style.transform = "translateZ(0px)"
      btnRef.current.style.transform = "translateZ(0px)"

      picBackRef.current.style.width = "160px"
      picBackRef.current.style.height = "160px"
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
            Very motivated, hard worker and fast learner Full stack developer
            with a strong will to solve real world problems and build projects.{" "}
          </p>
          <div className="header-links" ref={btnRef}>
            <img src={githubLogo} alt="github" />
            <img src={linkedinLogo} alt="linkedin" />
            <img src={emailLogo} alt="email" />
          </div>
        </div>
      </div>
    </div>
  )
}
