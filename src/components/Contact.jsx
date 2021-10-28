import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" class="contact">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Contact Us</h2>
                </div>
                <div class="row mt-1 d-flex justify-content-end" data-aos="fade-right" data-aos-delay="100">
                  <div class="col-lg-5">
                    <div class="info">
                      <div class="address">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>lasfkall India</p>
                      </div>
                      <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p><a href="#" class="__cf_email__" >random@gmail.com</a></p>
                      </div>
                      <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+0 000000 000000 000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="100">
                    <form action="#" method="#" role="form" class="php-email-form">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                      </div>
                      <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                      </div>
                      <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}
