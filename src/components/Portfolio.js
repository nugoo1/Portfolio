import React from "react"

import pageStyles from "../styles/pages.module.scss"
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <>
      <div className={pageStyles.mainContent}>
        <div className="portfolio">
          <div className="portfolio-item medium one"><a href="/">Budget App</a></div>
          <div className="portfolio-item large two"><a href="/">Casino Website</a></div>
          <div className="portfolio-item medium three"><a href="/">Corporate Website</a></div>
          <div className="portfolio-item small four"><a href="/">New Macau Casino</a></div>
          <div className="portfolio-item tall five"><a href="/">New Macau Casino</a></div>
          <div className="portfolio-item wide six"><a href="/">New Macau Casino</a></div>
        </div>
      </div>
    </>
  )
}
