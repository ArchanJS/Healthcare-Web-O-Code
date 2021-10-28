import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <>
                <section id="services" class="services">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Services</h2>
                  <strong>Our services will make a difference in the quality of life in the communities we serve. It is our responsibility to assess the needs of our patients, physicians, employees, and others, and, to the best of our ability and resources, respond to those needs.</strong>
                </div>
                <div class="row">
                  <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-box">
                    <i class="bi bi-heart"></i>
                      <h4><a href="#">Cardiologist</a></h4>
                      <strong>A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system. The cardiologist will carry out tests, and they may perform some procedures, such as heart catheterizations, angioplasty, or inserting a pacemaker.</strong>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                    <i class="bi bi-eye"></i>
                      <h4><a href="#">Opthalmologist</a></h4>
                      <strong>Ophthalmologists diagnose and treat injuries, infections, diseases, and disorders of the eye. Treatments can include medication taken orally (by mouth) or topically (in the eye), surgery, cryotherapy (freeze treatment), and chemotherapy (chemical treatment).</strong>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <i class="bi bi-binoculars"></i>
                      <h4><a href="#">Medical Lab</a></h4>
                      <strong>The role of a clinical laboratory is to promptly provide highly reliable laboratory data to satisfy the needs of clinicians involved in medical practice and health maintenance of patients. Improvement and maintenance of the quality of the laboratory staff and environment are essential to achieve this goal.</strong>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                    <i class="bi bi-bag-plus"></i>
                      <h4><a href="#">Pediatrician</a></h4>
                      <strong>A pediatrician is a medical doctor who manages the physical, behavioral and mental care for children from birth until age 18. A pediatrician is trained to diagnose and treat a broad range of childhood illnesses, from minor health problems to serious diseases.</strong>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                    <i class="bi bi-scissors"></i>
                      <h4><a href="#">Surgeon</a></h4>
                      <strong>Surgery is a medical or dental specialty that uses operative manual and instrumental techniques on a person to investigate or treat a pathological condition such as a disease or injury, to help improve bodily function, appearance, or to repair unwanted ruptured areas.</strong>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="600">
                    <div class="icon-box">
                    <i class="bi bi-droplet"></i>
                      <h4><a href="#">General Physician</a></h4>
                      <strong>The job of a general physician is to ensure the well-being of patients through medication and exercise. A general physician is found to be practicing medicine in various settings, including public health organisations, teaching facilities, private practices, group practices and hospitals.</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="cta" class="cta">
              <div class="container">
                <div class="row" data-aos="zoom-in">
                  <div class="col-lg-9 text-center text-lg-start">
                    <h3>Book an Appointment</h3>
                    <p> Our mission is to promote an environment where members of a community can receive high quality care and service so they can maintain and be restored to good health. Book an appointment to get our services to be delivered at ease.</p>
                  </div>
                  <div class="col-lg-3 cta-btn-container text-center">
                    <a class="cta-btn align-middle" href="#contact">Book an Appointment</a>
                  </div>
                </div>
              </div>
            </section>
            </>
        )
    }
}
