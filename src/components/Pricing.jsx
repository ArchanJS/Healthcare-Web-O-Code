import React, { Component } from 'react'

export default class Pricing extends Component {
    render() {
        return (
            <section id="pricing" class="pricing">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Pricing</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="box">
                      <div class="btn-wrap">
                        <a href="#" class="btn-buy">Buy Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="box featured">
                      <div class="btn-wrap">
                        <a href="#" class="btn-buy">Buy Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div class="box">
                      <div class="btn-wrap">
                        <a href="#" class="btn-buy">Buy Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div class="box">
                      <div class="btn-wrap">
                        <a href="#" class="btn-buy">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}