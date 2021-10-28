import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <>
                <section id="portfolio" class="portfoio">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Gallery</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div class="row">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" class="filter-active">All</li>
                      <li data-filter=".filter-app">Cardiology</li>
                      <li data-filter=".filter-card">Opthalmology</li>
                      <li data-filter=".filter-web">Dermatology</li>
                    </ul>
                  </div>
                </div>
                <div class="row portfolio-container">
                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Cardiology</h4>
                      <p>Cardiology</p>
                      <a href="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="https://www.verywellhealth.com/thmb/HBp4oY45Syiso08x4yXHgpl-kJQ=/2000x1125/smart/filters:no_upscale()/GettyImages-1154030721-974bcd6d70ff4489ba961317f1f3640f.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Dermatology</h4>
                      <p>Dermatology</p>
                      <a href="https://www.verywellhealth.com/thmb/HBp4oY45Syiso08x4yXHgpl-kJQ=/2000x1125/smart/filters:no_upscale()/GettyImages-1154030721-974bcd6d70ff4489ba961317f1f3640f.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Cardiology</h4>
                      <p>Cardiology</p>
                      <a href="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="https://marvel-b1-cdn.bc0a.com/f00000000038905/www.aao.org/full/image.axd?id=711b0d10-43ec-4f34-9733-36a58bfa7ad9&t=637522850761230000" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Opthalmology</h4>
                      <p>Opthalmology</p>
                      <a href="https://marvel-b1-cdn.bc0a.com/f00000000038905/www.aao.org/full/image.axd?id=711b0d10-43ec-4f34-9733-36a58bfa7ad9&t=637522850761230000" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="https://www.srisriholistichospitals.com/wp-content/uploads/2020/12/Dermatologynew.png" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Dermatology</h4>
                      <p>Dermatology</p>
                      <a href="https://www.srisriholistichospitals.com/wp-content/uploads/2020/12/Dermatologynew.png" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Cardiology</h4>
                      <p>Cardiology</p>
                      <a href="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1007/2016/06/bigstock-Ophthalmology-eye-doctors-off-105586790.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Opthalmology</h4>
                      <p>Opthalmology</p>
                      <a href="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1007/2016/06/bigstock-Ophthalmology-eye-doctors-off-105586790.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPMnrKUX4l29aU30Mj0pmBpkndPRVmDro7w&usqp=CAU" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Opthalmology</h4>
                      <p>Opthalmology</p>
                      <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPMnrKUX4l29aU30Mj0pmBpkndPRVmDro7w&usqp=CAU" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc95YNT4gH3jDDO88o3_htcFBjoGtTjH4UgQ&usqp=CAU" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Dermatology</h4>
                      <p>Dermatology</p>
                      <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc95YNT4gH3jDDO88o3_htcFBjoGtTjH4UgQ&usqp=CAU" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </>
        )
    }
}
