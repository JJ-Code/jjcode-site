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
import Testimonials from "./Testimonials";


const About = ({ match, page: { url, loading }, setURL }) => {
  console.log(match)
  useEffect(() => {
    setURL(match.path)
  }, [setURL, match.path]);
  return (
    <section id="about" className="about">
      <Bio />
      <Count />
      <Skills />
      <Interest />
      <Testimonials />
    </section>

  )
};

const mapStateToProps = state => ({
  page: state.page
});
export default connect(
  mapStateToProps,
  { setURL })(About);

