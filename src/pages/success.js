import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import { FaCheck } from "react-icons/fa"

export default () => {
  return (
    <div>
      <div>
        <Grid container spacing={16} style={{position:"absolute", top: "40%", left: "50%", bottom:"60%", right:"50%", transform:"translate(-50%, -40%)"}}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: 0 }}>
              Message Sent!
            </h1>
            <h1
              style={{
                textAlign: "center",
                marginBottom: 0,
                color: "green",
              }}
            >
              <FaCheck />
            </h1>
            <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
              Thank you for getting in touch. We will try to get back to you
              within 48 hours.
            </h4>
            <Link
              to="/"
              style={{
                margin: 0,
                backgroundColor: "#fcfcfc",
                maxWidth: "200px",
              }}
            >
              Go Back
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
