import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
            <Services/>
      </div>
    )
  }
}
