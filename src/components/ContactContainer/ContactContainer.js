import React, { useState } from "react"
import emailjs from "emailjs-com"
import ParticleEffect from "react-particle-effect-button"

import "./ContactContainer.css"

export default function ContactContainer({ contactStyle, setContactStyle }) {
  const [alertOpacity, setAlertOpacity] = useState(0)
  //   Is effect component hidden
  const [effectState, setEffectState] = useState(false)

  //   refs and function to handle closing card
  const closeCardFunc = () => {
    setEffectState(true)
    setAlertOpacity(1)

    // wait some seconds before closing the card, the alert
    // and setting the state of the effect component to hidden false
    setTimeout(() => {
      setContactStyle("none")
      setEffectState(false)
      setAlertOpacity(0)
    }, 3500)
  }
  const closeForm = () => {
    setEffectState(true)

    setTimeout(() => {
      setContactStyle("none")
      setEffectState(false)
    }, 3500)
  }

  //   const {
  //     REACT_APP_EMAIL_SERVICE,
  //     REACT_APP_EMAIL_TEMPLATE,
  //     REACT_APP_EMAIL_USER
  //   } = process.env

  function sendEmail(e) {
    e.preventDefault()

    // emailjs
    //   .sendForm(
    //     REACT_APP_EMAIL_SERVICE,
    //     REACT_APP_EMAIL_TEMPLATE,
    //     e.target,
    //     REACT_APP_EMAIL_USER
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text)
    //     },
    //     error => {
    //       console.log(error.text)
    //     }
    //   )
    //   reset email input fields
    e.target.reset()
    closeCardFunc()
  }

  return (
    <div
      className="contact-container scale-up-ver-top"
      style={{
        display: contactStyle,
        transition: "all 1s ease"
      }}
    >
      <ParticleEffect
        color="#5879b3fb"
        direction="bottom"
        hidden={effectState}
        visible={effectState}
        particlesAmountCoefficient={3}
        duration={800}
      >
        <div className="card">
          <div className="x-button" onClick={closeForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5879b3"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <h2>Contact</h2>
          <p>
            Email: moenqira@gmail.com <br />
            Phone: +45 60186035
          </p>
          <p>Or fill up this form:</p>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="contact-column">
              <label>Name </label>
              <input type="text" name="user_name" />
            </div>
            <div className="contact-column">
              <label>Email </label>
              <input type="email" name="user_email" />
            </div>
            <div className="contact-message">
              <label>Message </label>
              <textarea name="message" required />
            </div>
            <input className="submit-btn" type="submit" value="Send" />
          </form>
        </div>
      </ParticleEffect>
      <div className="alert" style={{ opacity: alertOpacity }}>
        Thank you!
        <br /> Message sent successfully!
      </div>
    </div>
  )
}
