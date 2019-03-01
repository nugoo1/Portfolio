import React from "react"
import { connect } from "react-redux"
import Particles from "react-particles-js"
import BackgroundContent from "../elements/backgroundContent"
import particleStyles from "./particles.module.scss"

class Particle extends React.Component {
  render() {
    const particleValue = !this.props.stateMobile ? 80 : 35;
    return (
      <>
        <div className={particleStyles.container}>
          <BackgroundContent />
          <Particles
            params={{
              particles: {
                number: {
                  value: particleValue,
                },
                size: {
                  value: 6,
                },
                shape: {
                  type: "triangle",
                },
                move: {
                  speed: 6,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  repulse: {
                    distance: 150,
                    duration: 0.4,
                  },
                },
              },
            }}
            className={particleStyles.particles}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    stateMobile: state.isMobile,
  }
}

export default connect(mapStateToProps)(Particle)
