import React, { Component } from 'react'

export default class Faq extends Component {
    render() {
        return (
            <section id="faq" class="faq section-bg">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div class="faq-list">
                  <ul>
                    <li data-aos="fade-up" data-aos="fade-up" data-aos-delay="100">
                      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What are the warning signs of a heart attack? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                      <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                        <p>
                        Dizziness, light-headedness or feeling faint, nausea, indigestion, or vomiting, shortness of breath etc. .
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="200">
                      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">What are the early warning signs of glaucoma? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                      <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Halos around lights, loss of vision in one eye, cloudy looking eyes, sensitivity to light etc. .
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="300">
                      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">What are the warning signs of a stroke? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                      <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Sudden onset of weakness or numbness on one side of the body, sudden speech difficulty or confusion, sudden difficulty seeing in one or both eyes, Sudden onset of dizziness, trouble walking or loss of balance etc. .
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400">
                      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">What are the primary symptoms of COVID-19? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                      <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Some of the primary symptoms to look for in a Covid 19 infected person are fever, dizziness, breathlessness, headache, dry cough ( eventually result in phlegm) and in a few cases loss in smell and taste. A few cases have also reported diarrhoea and fatigue.
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500">
                      <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">What if I have any doubts after the appointment or have any issue? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                      <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Don't worry, you can call or mail us anytime or reach out to our office. Our consultants will be more than happy to help you out.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
        )
    }
}
