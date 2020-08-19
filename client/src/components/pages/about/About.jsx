import React, { useEffect } from 'react'
import '../Section.css'
import './About.css'
import { setURL } from '../../../actions/page';
import { connect } from 'react-redux';
import climb from "../../../images/climb.jpg";
import Icofont from 'react-icofont';

const About = ({ match, page: { url, loading }, setURL }) => {
  console.log(match)
  useEffect(() => {
    setURL(match.path)
  }, [setURL, match.path]);
  return (
    <section id="about" className="about">

      {/* <!-- ======= About Me ======= --> */}
      <div className="about-me container">

        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={climb} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX &amp; Graphic Designer</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
          </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Birthday:</strong> 1 May 1995</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Website:</strong> www.example.com</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Phone:</strong> +123 456 7890</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>City:</strong> City : New York, USA</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Age:</strong> 30</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Degree:</strong> Master</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>PhEmailone:</strong> email@example.com</li>
                  <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
          </div>
        </div>

      </div>
      {/* <!-- End About Me --> */}

      {/* <!-- ======= Counts ======= --> */}
      <div className="counts container">

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <Icofont icon="icofont-simple-smile" />
              <span data-toggle="counter-up">232</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <Icofont icon="icofont-document-folder" />
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <Icofont icon="icofont-live-support" />
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <Icofont icon="icofont-users-alt-5" />
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>

      </div>
      {/* <!-- End Counts --> */}

      {/* <!-- ======= Skills  ======= --> */}
      <div className="skills container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <Icofont icon="val">100%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <Icofont icon="val">90%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <Icofont icon="val">75%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <Icofont icon="val">80%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <Icofont icon="val">90%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <Icofont icon="val">55%</Icofont></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* <!-- End Skills --> */}

      {/* <!-- ======= Interests ======= --> */}
      <div className="interests container">

        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-store-line" style="color: #ffbb2c;"></Icofont> */}
              <Icofont icon="brainstorming" />
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              {/* <Icofont icon="ri-bar-chart-box-line" style="color: #5578ff;"></Icofont> */}
              <Icofont icon="education" />
              <h3>Dolor Sitema</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              {/* <Icofont icon="ri-calendar-todo-line" style="color: #e80368;" /> */}
              <Icofont icon="chart-bar-graph" />
              <h3>Sed perspiciatis</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <Icofont icon="island-alt" />
              {/* <Icofont icon="ri-paint-brush-line" style="color: #e361ff;"></Icofont> */}
              <h3>Magni Dolores</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-database-2-line" style="color: #47aeff;" /> */}
              <Icofont icon="chart-histogram" />
              <h3>Nemo Enim</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-gradienter-line" style="color: #ffa76e;" /> */}
              <Icofont icon="search-stock" />
              <h3>Eiusmod Tempor</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-file-list-3-line" style="color: #11dbcf;" /> */}
              <Icofont icon="code" />
              <h3>Midela Teren</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <Icofont icon="database" />
              {/* <Icofont icon="ri-price-tag-2-line" style="color: #4233ff;" /> */}
              <h3>Pira Neve</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <Icofont icon="news" />
              {/* <Icofont icon="ri-anchor-line" style="color: #b2904f;" /> */}
              <h3>Dirada Pack</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-disc-line" style="color: #b20969;" /> */}
              <Icofont icon="runner-alt-1" />
              <h3>Moton Ideal</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <Icofont icon="court" />
              {/* <Icofont icon="ri-base-station-line" style="color: #ff5828;" /> */}
              <h3>Verdo Park</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              {/* <Icofont icon="ri-fingerprint-line" style="color: #29cc61;" /> */}
              <Icofont icon="iphone" />
              <h3>Flavor Nivelanda</h3>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- End Interests --> */}

      {/* <!-- ======= Testimonials ======= --> */}
      <div className="testimonials container">

        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-item">
            <p>
              <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
            <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>

        </div>

      </div>
      {/* <!-- End Testimonials  --> */}

    </section>

  )
};

const mapStateToProps = state => ({
  page: state.page
});
export default connect(
  mapStateToProps,
  { setURL })(About);

