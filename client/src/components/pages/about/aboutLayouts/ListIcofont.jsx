import React from 'react';
import Icofont from 'react-icofont';

const ListIcofont = ({strongStr, str}) => {
  return (
    <div className="col-lg-6">
      <ul>
        <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>{strongStr}</strong> {str}</li>
      </ul>
      </div>
  )
}

export default ListIcofont
