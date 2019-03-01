import React from "react"
import Grid from "@material-ui/core/Grid"

import introContentStyles from "./introContentStyles.module.scss"

export default function introContent() {
  return (
    <Grid container className={introContentStyles.container}>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className={introContentStyles.item1}
      >
        <h1 style={{ display: "flex" }}>
          Web
          <span>
            <h3>Dev</h3>
          </span>
        </h1>
        <img
          src="https://cdn4.iconfinder.com/data/icons/MacBook_Pro/512/leopard.png"
          style={{ maxHeight: "200px", margin: "20px" }}
        />
        <p>Powered by ReactJs, GatsbyJs & Netlify</p>
        <a>Learn More</a>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className={introContentStyles.item2}
      >
        <h1 style={{ display: "flex" }}>
          Mobile
          <span>
            <h3>Apps</h3>
          </span>
        </h1>
        <img
          src="https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_X_Silver_WS2-full-product-front.png"
          style={{ maxHeight: "200px", margin: "20px" }}
        />
        <p>Powered by React Native</p>
        <a>Learn More</a>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className={introContentStyles.item3}
      >
        <div style={{ display: "flex" }}>
          <h1>Soft</h1>
          <h3>Ware</h3>
        </div>

        <img
          src="http://www.veracity.com.au/wp-content/uploads/2014/07/Cloud-Server-PNG-Clipart.png"
          style={{ maxHeight: "200px", margin: "20px" }}
        />
        <p>Powered by NodeJs & GraphQL</p>
        <a>Learn More</a>
      </Grid>
    </Grid>
  )
}
