import React, { useEffect } from "react"
import emailjs from "emailjs-com"

import "./ContactContainer.css"

export default function ContactContainer({ contactStyle }) {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ka0qytl",
        "template_ziau3vs",
        e.target,
        "user_Y9TFNKUBCYCtV3iR4ZM08"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  useEffect(() => {}, [contactStyle])

  return (
    <div
      className="contact-container scale-up-ver-top"
      style={{ display: contactStyle }}
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
    </div>
  )
}
