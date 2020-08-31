import React from 'react';
import Icofont from 'react-icofont';


const CountIcofont = ({ icon, counterUp, title}) => {
  return (
    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div className="count-box">
        <Icofont icon={icon} />
        <span data-toggle="counter-up">{counterUp}</span>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default CountIcofont
