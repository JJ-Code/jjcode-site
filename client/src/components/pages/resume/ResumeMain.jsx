import React, { useEffect, Fragment } from 'react';
import './Resume.css';
import '../Section.css';
import { setURL } from "../../../actions/page";
import { setLoading, fetchResumeData } from "../../../actions/resume";
import { connect } from 'react-redux';
import { chunkArray } from "../../../utilities/helperFX";
import { Result } from 'express-validator';
import ResumeItem from "./ResumeItem";
import { v4 as uuid } from 'uuid';


import Spinner from "../../layouts/Spinner";

const ResumeMain = ({ match, page: { url }, resumeData: { experience, loading, aboutID }, setURL, setLoading, fetchResumeData }) => {

  console.log(match)
  useEffect(() => {
    fetchResumeData()
    setURL(match.path)

    //setLoading(false)
    console.log("djlasflqflsjdfl")
  }, [setURL, match.path]);
  console.log(experience);






  const resumeDataObj = [{
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  },
  {
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  },
  {
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  },
  {
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  },
  {
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  },
  {
    title: "Summary",
    company: "Jay Jay",
    description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable."
  }

  ]

  let splitArr = chunkArray(resumeDataObj, 3)
  let splitArr2 = chunkArray(experience, 2)
  // let splitArr2;
  // if (loading === false) {
  //   splitArr2 = chunkArray(experience, 2)

  // }

  //console.log(splitArr2);

  return (
    <Fragment>

      {(loading) ? (
        <Spinner />
      ) : (
          <section id="resume" className="resume section-show">
            <div className="container">

              <div className="section-title">
                <h2>Resume</h2>
                <p>Check My Resume</p>
              </div>

              <div className="row">
                {/* {console.log(experience)}
                {

                  splitArr.map((currArr) => {

                    return (<div className="col-lg-6" key={uuid()}>
                      {currArr.map((curr) => {
                        console.log(curr.company)
                        return <ResumeItem title={curr.title} company={curr.company} current={curr.current} description={curr.description} key={uuid()} />
                      })
                      }
                    </div>)

                  })
                } */}


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
  { setURL, fetchResumeData, setLoading })(ResumeMain);


