import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header id="header" class="fixed-top d-flex align-items-center ">
            <div class="container d-flex align-items-center justify-content-between">
              <h1 class="logo"><a href="#">Lorem</a></h1>
            
              <nav id="navbar" class="navbar">
                <ul>
                  <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#Heading">Heading</a></li>
                  <li><a class="nav-link scrollto" href="#Heading">Heading</a></li>
                  <li><a class="nav-link scrollto " href="#Heading">Heading</a></li>
                  <li><a class="nav-link scrollto" href="#Heading">Heading</a></li>
                  <li><a class="nav-link scrollto" href="#Heading">Heading</a></li>
                  <li><a class="nav-link scrollto" href="#Heading">Heading</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
        )
    }
}
