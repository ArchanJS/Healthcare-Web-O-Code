import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header id="header" class="fixed-top d-flex align-items-center ">
            <div class="container d-flex align-items-center justify-content-between">
              <h1 class="logo"><a href="#">Medalpha</a></h1>
            
              <nav id="navbar" class="navbar">
                <ul>
                  <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">About</a></li>
                  <li><a class="nav-link scrollto" href="#services">Services</a></li>
                  <li><a class="nav-link scrollto " href="#portfolio">Gallery</a></li>
                  <li><a class="nav-link scrollto" href="#team">Doctors</a></li>
                  <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
        )
    }
}
