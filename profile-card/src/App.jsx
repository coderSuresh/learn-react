import React from "react"
import Buttons from "./components/Buttons"
import HeroImg from "./components/HeroImg"
import Intro from "./components/Intro"
import About from "./components/About"
import Footer from "./components/Footer"
import "./styles/style.css"

const App = () => {

  return (
    <main className="main">
      <div className="card">
        <HeroImg />
        <Intro />
        <Buttons />
        <About title="About" content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
        <About title="Interests" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
        <Footer />
      </div>
    </main>
  )
}

export default App
