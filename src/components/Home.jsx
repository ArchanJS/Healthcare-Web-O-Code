import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section id="hero" class="d-flex justify-cntent-center align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
             
              <div class="carousel-item active">
                <div class="carousel-container">
                  <h2 class="animate__animated animate__fadeInDown">Lorem, ipsum. <span>Lorem</span></h2>
                  <p class="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#Heading" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
             
              <div class="carousel-item">
                <div class="carousel-container">
                  <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                  <p class="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#Heading" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            
              <div class="carousel-item">
                <div class="carousel-container">
                  <h2 class="animate__animated animate__fadeInDown">Lorem ipsum dolor sit.</h2>
                  <p class="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#Heading" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
              </a>
            </div>
          </section>
        )
    }
}
