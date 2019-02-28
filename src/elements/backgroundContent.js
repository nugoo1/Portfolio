import React from "react"
import backgroundContentStyles from "./backgroundContent.module.scss"

export default function backgroundContent() {
  return (
    <div className={backgroundContentStyles.container}>
      <h1 className={backgroundContentStyles.title}>Hello</h1>
    </div>
  )
}
