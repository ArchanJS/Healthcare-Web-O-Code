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
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Gallery/>
        <Doctors/>
        <Pricing/>
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
