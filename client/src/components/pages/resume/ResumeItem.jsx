import React, { Fragment } from 'react';
import { v4 as uuid } from 'uuid';
const ResumeItem = ({ id, title, company, description, current, dateRange }) => {
  console.log("title");
  return (

    <Fragment >
      <div className="col-lg-6" key={id}>
        <h3 className="resume-title">{title}</h3>
        <div className="resume-item">
          <h4>{company}</h4>
          <h5>{dateRange}</h5>
          {/* <p><em>{description}</em></p> */}

          <ul>
            {
              description.map((el) => {
                return (<li key={uuid()}>{el}</li>)
              })
            }

          </ul>
        </div>
      </div>
    </Fragment>

  )
}


export default ResumeItem
