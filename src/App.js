import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    )
  }
}
