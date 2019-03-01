import React from "react"

import pageStyles from "../styles/pages.module.scss"
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <>
      <div className={pageStyles.mainContent}>
        <div className="titleContainer">
          <h1 className="title">My Work</h1>
        </div>
        <div className="portfolio">
          <div className="portfolio-item medium one">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
          <div className="portfolio-item large two">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
          <div className="portfolio-item medium three">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
          <div className="portfolio-item small four">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
          <div className="portfolio-item tall five">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
          <div className="portfolio-item wide six">
            <a className="linkOne" href="/">View Source</a>
            <a className="linkTwo" href="/">View Demo</a>
          </div>
        </div>
      </div>
    </>
  )
}
