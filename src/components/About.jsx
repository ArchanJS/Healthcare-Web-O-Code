import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
            <section id="icon-boxes" class="icon-boxes">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bxl-dribbble"></i></div>
                      <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                      <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                      <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-tachometer"></i></div>
                      <h4 class="title"><a href="">Magni Dolores</a></h4>
                      <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-layer"></i></div>
                      <h4 class="title"><a href="">Nemo Enim</a></h4>
                      <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" class="about">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>About Us</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div class="row content">
                  <div class="col-lg-6">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                      <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" class="btn-learn-more">Learn More</a>
                  </div>
                </div>
              </div>
            </section>
            <section id="clients" class="clients">
              <div class="container" data-aos="zoom-in">
                <div class="clients-slider swiper-container">
                  <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="abc" class="img-fluid" alt="" /></div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </section>
            <section id="why-us" class="why-us">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-5 align-items-stretch position-relative video-box" style={{backgroundImage: "url(https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80)"}} data-aos="fade-right">
                    <a href="https://youtu.be/abcd" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                  </div>
                  <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch" data-aos="fade-left">
                    <div class="content">
                      <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                      </p>
                    </div>
                    <div class="accordion-list">
                      <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                          <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                            <p>
                              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                            <p>
                              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </>
        )
    }
}
