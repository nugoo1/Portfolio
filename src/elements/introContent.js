import React from "react"
import Grid from "@material-ui/core/Grid"

import introContentStyles from "./introContentStyles.module.scss"
import Modal from "./modal"

export default class introContent extends React.Component {
  render() {
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
          <Modal
            title="React"
            desc="A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            link="https://reactjs.org/"
          />
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
          <Modal
            title="React Native"
            desc="React Native allows developers to create native mobile apps using JavaScript and React. The principle of 'Learn Once, Write Anywhere' applies here, letting you build one single application for both Android and iOS."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            link="https://facebook.github.io/react-native/"
          />
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
          <Modal
            title="Node.js"
            desc="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Google Chrome and in Node.js, among others."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png"
            link="https://nodejs.org/en/"
          />
        </Grid>
      </Grid>
    )
  }
}
