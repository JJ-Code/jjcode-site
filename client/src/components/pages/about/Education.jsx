import React from 'react';
import EdIcofont from "./aboutLayouts/EdIcofont";
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

const Education = ({ aboutData: { education } }) => {
  console.log(education)
  let countDataObj = [
    {
      icon: "icofont-graduate",
      school: "232",
      title: "Happy Clients",
      degree: [
        "Bachelor of Arts, Business Management Economics",
        "Bachelor of Arts, Legal Studies"
      ]
    },
    {
      icon: "icofont-certificate-alt-1",
      school: "521",
      title: "Projects",
      degree: [
        "Bachelor of Arts, Legal Studies"
      ]
    },
    {
      icon: "icofont-computer",
      school: "5219",
      title: "Hours Of Support",
      degree: [
        "Bachelor of Arts, Legal Studies"
      ]
    },
    {
      icon: "icofont-users-alt-5",
      school: "15",
      title: "Hard Workers",
      degree: [
        "Bachelor of Arts, Legal Studies"
      ]
    }

  ]
  return (
    <div className="counts container">
      <div className="section-title">
        <h2>Education</h2>
        <br/>
      </div>
      <div className="row">
        
        {education.map((curr) => {
          return <EdIcofont icon={curr.icon} school={curr.school} dateRange={curr.dateRange} degree={curr.degree} note={curr.note} key={uuid()} />
        })}

      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  aboutData: state.aboutData
});

export default connect(mapStateToProps)(Education);

