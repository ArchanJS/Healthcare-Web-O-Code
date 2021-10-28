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
                      <h4 class="title"><a href="">Working Hours</a></h4>
                      <strong class="description">Since are committed to you, we try to provide 24x7 services.
                      </strong>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4 class="title"><a href="">Appointments</a></h4>
                      <strong class="description">You can book any number of appointments any time round the clock. In case of any issue you can also contact us through the number given in the website.</strong>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-tachometer"></i></div>
                      <h4 class="title"><a href="">Emergency Cases</a></h4>
                      <strong class="description"><strong>+91 9876543210</strong>
                      <br />
                      For emergency cases, contact us through the number given above.
                      </strong>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-layer"></i></div>
                      <h4 class="title"><a href="">Best Service</a></h4>
                      <strong class="description">Medalpha is home to a world-class team of primary care providers and specialists. </strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" class="about">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>About Us</h2>
                  <p>We will provide efficient caring services to our patients and others in a courteous and professional way. We will strive to provide high quality, cost-efficient health care. We will continue to develop new services and eliminate obstacles to demonstrate our commitment of being responsive to the needs of our community.</p>
                </div>
                <div class="row content">
                  <div class="col-lg-6">
                    <p>
                    Our greatest asset is the people who are committed to our organization.
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> As an organization, we value the participation of each employee, physician, volunteer, and Board member.</li>
                      <li><i class="ri-check-double-line"></i> We will encourage suggestions, listen attentively, and follow through.</li>
                      <li><i class="ri-check-double-line"></i> Recognizing the importance of everyone who works here, we expect to treat one another, and to be treated, with respect and a sense of importance of team work.</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    We offer high quality service to accomodate all the patients and to help with our customer's needs.
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
                    <div class="swiper-slide"><img src="https://www.narayanahealth.org/sites/all/themes/nh_default_theme/logo.svg" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://kolkata.apollohospitals.com/wp-content/themes/apollo/images/amsh-logo-head.svg" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://image.freepik.com/free-vector/hospital-logo-template_1061-6.jpg" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://cdn2.f-cdn.com/contestentries/1506352/34143080/5ce925e804d64_thumb900.jpg" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://cdn2.f-cdn.com/contestentries/1210941/27368668/5a3b7bb293271_thumb900.jpg" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHDjM6cr_Dy1BreZOgeMM4oLdA_GjeBCw-l0P5f5A72FT2Nsi8uOIfG2ngoCVodjOBrY&usqp=CAU" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_hUjY-2s9BjadKQgVsc53nv4e23L5oSqKuYFtkug-dboZEw370Ky0fFbcoO7C-W8jzE&usqp=CAU" class="img-fluid" alt="" /></div>
                    <div class="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwK1J2NJQugsEx-Q3XENxKRpDvXAF5MBQr0bK1mYBjCSLbsoW9irwpq4ZOlVQUdgVM32s&usqp=CAU" class="img-fluid" alt="" /></div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </section>
            <section id="why-us" class="why-us">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-5 align-items-stretch position-relative video-box" style={{backgroundImage: "url(https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}} data-aos="fade-right">
                    <a href="https://www.youtube.com/watch?v=pc1jlelzmPY" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                  </div>
                  <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch" data-aos="fade-left">
                    <div class="content">
                      <h3><strong>Staffs of Medalpha</strong></h3>
                      <p>
                      Having a talented staff is necessary to operate an effective healthcare organization that offers exceptional patient care. Similarly Medalpha also possesses the same.All employees are trained and knowledgeable, or they risk putting patients' lives at risk. Qualified healthcare workers ensure the facility runs smoothly and safely.
                      </p>
                    </div>
                    <div class="accordion-list">
                      <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                          <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Doctor <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                            <p>
                            The doctors are the primary care providers. A doctor studies for many years and gains experience for a few more years before he or she can actually practice as a doctor. There are different types of doctors. The doctors that we all refer to as ‘doctor’ is also called a physician or general practitioner. We go to them for first-level diagnoses and the treatment of colds, flu, and other conditions.
                            </p>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed"><span>02</span> Nurses <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Nurses are not only in hospitals. There may be trained and registered nurses in a doctor’s office to take blood pressure, do blood sugar tests, draw blood, etc. Nurses work closely with patients and their job in the healthcare process is often more important for recovery than the doctor’s. They take care of patients and are there when things go wrong. Nurses can have different levels of qualification based on their studies and experience.
                            </p>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span> Pharmacist <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Pharmacists have to study for a long time and know a lot about chemicals, medicines, side effects, and toxins. They are the people who give patients medications that a doctor prescribed for a specific condition. They can also advise patient’s on over-the-counter medication to help with certain conditions.
                            </p>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" class="collapsed"><span>04</span> Administrative staff <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Administrative staff at a doctor’s office or a hospital is also an important part of the healthcare team. Without them, things may go very wrong. They handle appointments, payments, patient files, health insurance companies, specialists, medical reps, etc. .
                            </p>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" class="collapsed"><span>05</span> Technology and technicians <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list">
                            <p>
                            Before making a diagnosis, doctors often need more information about what is going on in the patient’s body. To get this information, the doctor may send blood or urine samples to a lab for analysis. The technicians who work in the lab look for all kinds of things in the blood or urine to help the doctor make a diagnosis.
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
