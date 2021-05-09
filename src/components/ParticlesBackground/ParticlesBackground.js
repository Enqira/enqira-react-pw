import React from "react"
import Particles from "react-particles-js"
import particlesConfig from "./ParticlesConfig"
import "./Particles.styles.css"

export default function ParticlesBackground() {
  return <Particles params={particlesConfig} className="particles-background"/>
}
