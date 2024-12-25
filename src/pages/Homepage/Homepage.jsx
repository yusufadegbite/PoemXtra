import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Poems from '../../components/Poems'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Poems />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
