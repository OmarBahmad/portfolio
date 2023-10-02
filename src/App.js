import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './App.css'

function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
