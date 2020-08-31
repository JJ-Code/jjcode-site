import React, {Fragment} from 'react'

const ResumeItem = ({ sectionName, sectionTitle, description }) => {
  return (

    <Fragment >
      <h3 className="resume-title">{sectionName}</h3>
      <div className="resume-item">
        <h4>{sectionTitle}</h4>
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
