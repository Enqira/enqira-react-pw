import React, { useState } from "react"
import emailjs from "emailjs-com"
// import ParticleEffect from "react-particle-effect-button"
import TheCloud from "../BackgroundSVG/TheCloud"

import "./ContactContainer.css"

export default function ContactContainer({ contactStyle, setContactStyle }) {
  const [alertOpacity, setAlertOpacity] = useState(0)

  //   when the popup close button clicked from popup
  const handleCloseClicked = () => {
    setContactStyle("none")
    setAlertOpacity(0)
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
    setAlertOpacity(1)
  }

  return (
    <div
      className="contact-container scale-up-ver-top"
      style={{
        display: contactStyle,
        transition: "all 1s ease"
      }}
    >
      <div>
        <div className="card">
          <div className="x-button" onClick={handleCloseClicked}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFBE55"
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
          <div className="form-cloud-container">
            <div className="form-container">
              <p>
                Email: moenqira@gmail.com <br />
                Phone: +45 60186035
              </p>
              <p>Or fill up this form:</p>

              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-coder-container">
                  <div className="name-email-container">
                    <div className="contact-column">
                      <label>Name </label>
                      <input type="text" name="user_name" />
                    </div>
                    <div className="contact-column email-input">
                      <label>Email </label>
                      <input type="email" name="user_email" />
                    </div>
                  </div>
                  <TheCloud />
                </div>
                <div className="contact-message">
                  <label>Message </label>
                  <textarea name="message" required />
                </div>
                <input className="submit-btn" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="alert" style={{ opacity: alertOpacity }}>
        Thank you for your message!
        <br /> I will get back to you as soon as possible.
        <button className="close-btn" onClick={handleCloseClicked}>
          Close
        </button>
      </div>
    </div>
  )
}
