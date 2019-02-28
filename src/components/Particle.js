import React from "react"
import Particles from "react-particles-js"
import BackgroundContent from "../elements/backgroundContent"
import particleStyles from "./particles.module.scss"

const backgroundParams = {
  particles: {
    number: {
      value: 80,
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
}

const Particle = () => (
  <>
    <div className={particleStyles.container}>
      <BackgroundContent />
      <Particles
        params={backgroundParams}
        className={particleStyles.particles}
      />
    </div>
  </>
)

export default Particle
