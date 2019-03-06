import React from "react"
import { navigateTo } from "gatsby-link"

import contactStyles from "./contact.module.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
      const disabled = !this.state.name || !this.state.email || !this.state.message ? true : false
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <label style={{ display: "none" }}>
            Don’t fill this out:{" "}
            <input
              name="bot-field"
              onChange={this.handleChange}
              className={contactStyles.defaultInput}
            />
          </label>
          <label>
            <h2>Your name: </h2>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              className={contactStyles.defaultInput}
            />
          </label>
          <label>
            <h2>Your email: </h2>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              className={contactStyles.defaultInput}
            />
          </label>
          <label>
            <h2>Message: </h2>
            <textarea
              name="message"
              onChange={this.handleChange}
              className={contactStyles.defaultInput}
              style={{
                width: "100%",
                minHeight: "200px",
                fontSize: "1rem",
              }}
            />
          </label>

          <button
            type="submit"
            className={disabled ? contactStyles.button : contactStyles.buttonSubmit}
            disabled={disabled}
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}
