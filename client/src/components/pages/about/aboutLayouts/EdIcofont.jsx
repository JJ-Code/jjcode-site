import React from 'react';
import Icofont from 'react-icofont';
import { v4 as uuid } from 'uuid';


const EdIcofont = ({ icon, school, dateRange, note, degree }) => {
  return (
    <div className="col-lg-4 col-md-4 mt-5 mt-lg-0">
      
      <div className="count-box">
        <Icofont icon={icon} />
        <h5 data-toggle="counter-up" className="count-school">{school}</h5>

        <p id="count-date">({dateRange})</p>
        
        {
          degree.map((el) => {
            return (<h5 className="count-degree" key={uuid()}> {el} </h5>)
          })
          }
      
        <p id="count-note">{note}</p>
      </div>
    </div>
  )
}

export default EdIcofont;
