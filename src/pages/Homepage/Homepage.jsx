import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Poems from '../../components/Poems'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import GoogleAd from "../../components/GoogleAd";


function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Poems />
      <GoogleAd adClient="pub-7602772160441740" adSlot="4769888030" />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
