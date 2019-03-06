import React from "react"
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa"

import Contact from "./Contact";
import footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <>
      <div className={footerStyles.contactContainer}>
        <div className={footerStyles.titleContainer}>
          <h1 className={footerStyles.title}>Reach Out</h1>
        </div>
        <Contact />
      </div>
      <div className={footerStyles.footerContainer}>
        <h2>Connect Directly</h2>
        <div className={footerStyles.socialIcons}>
          <a>
            <FaEnvelope />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
        <div className={footerStyles.copyrightContainer}>
          <p>Copyright 2019. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
