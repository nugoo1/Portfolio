import React from "react"
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaAddressCard,
  FaFeatherAlt,
} from "react-icons/fa"

import footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <>
      <div className={footerStyles.contactContainer}>
        <h1 className={footerStyles.contactTitle}>
          <FaFeatherAlt style={{marginRight: "20px"}}/>
          Reach Out
        </h1>
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