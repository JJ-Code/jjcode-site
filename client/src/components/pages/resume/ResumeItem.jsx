import React, { Fragment } from 'react';

const ResumeItem = ({ title, company, description, current }) => {
  console.log("title");
  return (

    <Fragment >
      <h3 className="resume-title">{title}</h3>
      <div className="resume-item">
        <h4>{company}</h4>
        <p><em>{description}</em></p>

        <ul>
          <li>Portland par 127,Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>
    </Fragment>

  )
}


export default ResumeItem
