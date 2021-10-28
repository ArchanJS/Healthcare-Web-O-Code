import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Doctors from './components/Doctors'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Gallery />
        <Doctors />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
        <div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
      </div>
    )
  }
}
