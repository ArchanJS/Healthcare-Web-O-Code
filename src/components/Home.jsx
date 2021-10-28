import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section id="hero" class="d-flex justify-cntent-center align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
             
              <div class="carousel-item active">
                <div class="carousel-container">
                  <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Medalpha</span></h2>
                  <p class="animate__animated animate__fadeInUp">To provide access to high quality, respectful and patient-centered primary and preventive healthcare services for everyone.</p>
                  <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
             
              <div class="carousel-item">
                <div class="carousel-container">
                  <h2 class="animate__animated animate__fadeInDown">Great Medical Team</h2>
                  <p class="animate__animated animate__fadeInUp">We are committed to the health of you and your family. We provide service for 24X7.</p>
                  <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
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
