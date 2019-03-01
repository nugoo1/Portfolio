import React from "react"
import backgroundContentStyles from "./backgroundContent.module.scss"

export default function backgroundContent() {
  return (
    <>
      <div className={backgroundContentStyles.container}>
        <h2 className={backgroundContentStyles.subtitle}>Welcome to</h2>
        <h1 className={backgroundContentStyles.title}>My Portfolio</h1>
        <p className={backgroundContentStyles.text}>
          Looking to design and develop your very own website, mobile app or
          enterprise software?
        </p>
        <p className={backgroundContentStyles.text}>
          You’ve come to the right place!
        </p>
        <button className={backgroundContentStyles.button}>Get in Touch</button>
      </div>
    </>
  )
}
