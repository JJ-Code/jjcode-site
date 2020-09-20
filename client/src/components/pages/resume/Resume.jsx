import React, { useEffect, Fragment } from 'react'
import '../Section.css'
import './Resume.css'
import { setURL } from '../../../actions/page';
import { fetchResumeData } from '../../../actions/resume';
import { connect } from 'react-redux';
import ResumeItem from "./ResumeItem";
import Spinner from "../../layouts/Spinner";
import { chunkArray } from "../../../utilities/helperFX";
import { v4 as uuid } from 'uuid';

const Resume = ({ match, page: { url }, resumeData: { experience, loading }, setURL, fetchResumeData }) => {
  console.log(match)
  useEffect(() => {
    fetchResumeData()
    setURL(match.path)
  }, [setURL, match.path]);
  console.log(experience);

  return (
    <Fragment>
      {
        (experience.length === 0) ? (<Spinner />) : (
          <section id="resume" className="resume section-show">
            <div className="container">

              <div className="section-title">
                <h2>Resume</h2>
                <p>Check My Resume</p>
              </div>

              <div className="row">
                {
                  experience.map((element) => {
                    
                    return (
                      <div className="col-lg-6" key={uuid()}>
                        {console.log(element.title)}
                        <ResumeItem title={element.title} company={element.company} current={element.current} description={element.description} dateRange={element.dateRange} key={element._id} />
                        </div>
                    )
                  })
                }
              </div>

            </div>
          </section>
        )}
    </Fragment>
  )
};

const mapStateToProps = state => ({
  page: state.page,
  resumeData: state.resumeData
});
export default connect(
  mapStateToProps,
  { setURL, fetchResumeData })(Resume);