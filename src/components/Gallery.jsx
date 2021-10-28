import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
          <section id="portfolio" class="portfoio">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Gallery</h2>
              <p>Image gallery of doctors of various departments of MedAlpha checking patients, with the latest equipments and methodologies.</p>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">All</li>
                  <li data-filter=".filter-app">Cardiology</li>
                  <li data-filter=".filter-card">Opthalmology</li>
                  <li data-filter=".filter-web">Pediatric</li>
                </ul>
              </div>
            </div>
            <div class="row portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="https://www.hawaiipacifichealth.org/media/3922/what-is-a-cardiologist-web.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Cardiology</h4>
                  <p>Cardiology</p>
                  <a href="https://www.hawaiipacifichealth.org/media/3922/what-is-a-cardiologist-web.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Cardiology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="https://mrhospitalchennai.com/wp-content/uploads/2019/04/Paediatrician-chennai.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Pediatrician</h4>
                  <p>Pediatrician</p>
                  <a href="https://mrhospitalchennai.com/wp-content/uploads/2019/04/Paediatrician-chennai.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Pediatric"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="https://cardiaccareandcounsellingcentre.com/wp-content/uploads/2017/04/maxresdefault.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Cardiology</h4>
                  <p>Cardiology</p>
                  <a href="https://cardiaccareandcounsellingcentre.com/wp-content/uploads/2017/04/maxresdefault.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Cardiology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="http://www.emccochin.com/wp-content/uploads/2015/12/Ophthalmology-1.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Opthalmology</h4>
                  <p>Opthalmology</p>
                  <a href="http://www.emccochin.com/wp-content/uploads/2015/12/Ophthalmology-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Opthalmology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="https://drprem.com/health/wp-content/uploads/sites/17/2017/12/Right-Paediatrician-2.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Pediatric</h4>
                  <p>Pediatric</p>
                  <a href="https://drprem.com/health/wp-content/uploads/sites/17/2017/12/Right-Paediatrician-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Pediatric"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="https://www.saibabahospital.net/images/services/cardiology.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Cardiology</h4>
                  <p>Cardiology</p>
                  <a href="https://www.saibabahospital.net/images/services/cardiology.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Cardiology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1007/2016/06/bigstock-Ophthalmology-eye-doctors-off-105586790.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Opthalmology</h4>
                  <p>Opthalmology</p>
                  <a href="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1007/2016/06/bigstock-Ophthalmology-eye-doctors-off-105586790.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Opthalmology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20170112031039/ri/590/picture/ophthalmologist%20eye%20exam%20-%20wavebreakmedia%20_thumb.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Opthalmology</h4>
                  <p>Opthalmology</p>
                  <a href="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20170112031039/ri/590/picture/ophthalmologist%20eye%20exam%20-%20wavebreakmedia%20_thumb.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Opthalmology"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="https://www.scripps.org/sparkle-assets/variants/hi_res_consideringapediatrician_web-51086dd144543da2fff40361aa1dd416_desktop_x++-1200x1200.jpg" class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Pediatric</h4>
                  <p>Pediatric</p>
                  <a href="https://www.scripps.org/sparkle-assets/variants/hi_res_consideringapediatrician_web-51086dd144543da2fff40361aa1dd416_desktop_x++-1200x1200.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Pediatric"><i class="bx bx-plus"></i></a>
                  <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    }
}
