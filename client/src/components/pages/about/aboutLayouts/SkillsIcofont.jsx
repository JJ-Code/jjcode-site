import React from 'react';
import Icofont from 'react-icofont';

const SkillsIcofont = ({ skill, value }) => {

  return (
    <div className="col-lg-6">
      <div className="progress">
        <span className="skill"> {skill} <Icofont icon="val">{value}</Icofont></span>

        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: `${value}` }}></div>

        </div>
      </div>
    </div>

  )
}

export default SkillsIcofont
