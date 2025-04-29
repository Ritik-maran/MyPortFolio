import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Quality from './Quality'
import Skills from './Skills'
import Projects from './Project'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Quality/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home