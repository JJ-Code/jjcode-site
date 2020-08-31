import React, { useEffect } from 'react'
import '../Section.css'
import './About.css'
import { setURL } from '../../../actions/page';
import { connect } from 'react-redux';
import Icofont from 'react-icofont';
import Bio from "./Bio";
import Count from "./Count";
import Skills from "./Skills";
import Interest from "./Interest";


const About = ({ match, page: { url, loading }, setURL }) => {
  console.log(match)
  useEffect(() => {
    setURL(match.path)
  }, [setURL, match.path]);
  return (
    <section id="about" className="about">
      {/* <!-- ======= About Me ======= --> */}
      <Bio />

      {/* <!-- ======= Counts ======= --> */}

      <Count />

      {/* <!-- ======= Skills  ======= --> */}
    
      <Skills />

      {/* <!-- ======= Interests ======= --> */}
<Interest />

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

