import React, { useState } from "react"
import emailjs from "emailjs-com"
import ParticleEffect from "react-particle-effect-button"

import "./ContactContainer.css"

export default function ContactContainer({ contactStyle, setContactStyle }) {
  const [alertOpacity, setAlertOpacity] = useState(0)
  //   Is effect component hidden
  const [effectState, setEffectState] = useState(false)
  const [onHoverStyle, setOnHoverStyle] = useState("lightblue")
  const [closeOpacity, setCloseOpacity] = useState(1)

  //   refs and function to handle closing card
  const closeCardFunc = () => {
    setEffectState(true)
    setCloseOpacity(0)
    setAlertOpacity(1)

    // wait some seconds before closing the card, the alert
    // and setting the state of the effect component to hidden false
    setTimeout(() => {
      setContactStyle("none")
      setEffectState(false)
      setCloseOpacity(1)
      setAlertOpacity(0)
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
