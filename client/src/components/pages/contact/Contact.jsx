import React, { useEffect } from 'react';
import './Contact.css';
import '../Section.css';
import { setURL } from "../../../actions/page";
import { connect } from 'react-redux';
import Icofont from 'react-icofont';

const Contact = ({ match, page: { url, loading }, setURL }) => {
  console.log(match)
  useEffect(() => {
    setURL(match.path)
  }, [setURL, match.path]);
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">

          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <Icofont icon="bx bx-map"></Icofont>
              <h3>My Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <Icofont icon="bx bx-share-alt"></Icofont>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="#" className="twitter"><Icofont icon="icofont-twitter"></Icofont></a>
                <a href="#" className="facebook"><Icofont icon="icofont-facebook"></Icofont></a>
                <a href="#" className="instagram"><Icofont icon="icofont-instagram"></Icofont></a>
                <a href="#" className="google-plus"><Icofont icon="icofont-skype"></Icofont></a>
                <a href="#" className="linkedin"><Icofont icon="icofont-linkedin"></Icofont></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <Icofont icon="bx bx-envelope"></Icofont>
              <h3>Email Me</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <Icofont icon="bx bx-phone-call"></Icofont>
              <h3>Call Me</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>

        <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
          <div className="form-row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-md-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate"></div>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

      </div>
    </section>
  )
};

const mapStateToProps = state => ({
  page: state.page
});
export default connect(
  mapStateToProps,
  { setURL })(Contact);

