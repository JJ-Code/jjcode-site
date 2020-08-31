import React from 'react';
import Icofont from 'react-icofont';

const InterestIcofonts = ({icon, title, color}) => {
  return (
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <Icofont icon={icon} style={{color: `${color}`}} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default InterestIcofonts
