import React, { useRef, useState, useEffect } from "react"
import "./HeaderCard.css"
import profileImg from "../../images/profile-img.png"
import githubLogo from "../../images/github.svg"
import linkedinLogo from "../../images/linkedin.svg"
import emailLogo from "../../images/mail.svg"

export default function HeaderCard({
  setContactStyle,
  contactStyle,
  setEffectState,
  contactRef
}) {
  const [cardStyle, setCardStyle] = useState()
  const [browser] = useState(false)
  const containerRef = useRef()
  const picBackRef = useRef()
  const btnRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const picRef = useRef()
  const headerCardRef = useRef()
  //   ref to make scroll to contact card
  const downloadRef = useRef()
  const handleContactClick = () => {
    //   make contact card apear
    // scroll to contact card
    if (contactStyle === "none") {
      setContactStyle("flex")
      contactRef.current.scrollIntoView({ behavior: "smooth" })
      console.log(contactRef.current)
    } else {
      setContactStyle("none")
    }
  }

  //we check if browser is safari or chrome
  const isBrowser = () => {
    if (navigator.userAgent.indexOf("Chrome") !== -1 || navigator.userAgent.indexOf("Safari") !== -1) {
      return true
    } else {
      return false
    }
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
      picRef.current.style.transform = "translateZ(100px)"
      titleRef.current.style.transform = "translateZ(100px)"
      descriptionRef.current.style.transform = "translateZ(50px)"
      if (isBrowser) {
        btnRef.current.style.transform = "translateZ(120px)"
        downloadRef.current.style.transform = "translateZ(70px)"
      } else {
        picRef.current.style.borderRadius = "0"
      }

      // circle in the back of profile pic
      picBackRef.current.style.width = "54rem"
      picBackRef.current.style.borderRadius = "10px"
      picBackRef.current.style.top = "-1rem"
      picBackRef.current.style.height = "500px"
      picBackRef.current.style.top = "-2rem"
      picBackRef.current.style.opacity = "0"
    })

    // add event listener to make card turn to initial rotation when mouse leavs container
    containerRef.current.addEventListener("mouseleave", e => {
      setCardStyle({
        transform: `rotateX(0deg) rotateY(0deg)`,
        transition: "all 0.5s ease"
      })
      if (isBrowser()) {
        btnRef.current.style.transform = "translateZ(0)"
        downloadRef.current.style.transform = "translateZ(0)"
      } else {
        picRef.current.style.borderRadius = "100px"
      }

      picRef.current.style.transform = "translateZ(0)"
      titleRef.current.style.transform = "translateZ(0)"
      descriptionRef.current.style.transform = "translateZ(0)"

      //circle in the back of profile pic
      picBackRef.current.style.transform = "translateZ(0)"
      picBackRef.current.style.width = "160px"
      picBackRef.current.style.height = "160px"
      picBackRef.current.style.borderRadius = "100px"
      picBackRef.current.style.top = "initial"
      picBackRef.current.style.opacity = "1"
    })
    // remove the event listeners, otherwise a lot of event listener will be created, and may slow down computer
    containerRef.current.removeEventListener("mousemove", () => { })
    containerRef.current.removeEventListener("mouseleave", () => { })
    containerRef.current.removeEventListener("mouseenter", () => { })
  }, [browser])

  return (
    <div className="header-container" ref={containerRef}>
      <div className="header-card card" style={cardStyle} ref={headerCardRef}>
        <div className="header-img-container">
          <div className="header-circle" ref={picBackRef}></div>
          <div className="header-circle2" ></div>
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
            <div onClick={handleContactClick}>

              <img src={emailLogo} alt="email" />
            </div>
          </div>
          <div className="download-button-container" ref={downloadRef}>
            <a
              className="download-button"
              href="https://drive.google.com/file/d/1JF5YgoShvdirvWNAFOxkoK2PoMhD5cpc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              ref={contactRef}
            >
              See CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
