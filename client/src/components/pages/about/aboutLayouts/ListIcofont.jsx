import React from 'react';
import Icofont from 'react-icofont';

const ListIcofont = ({strongStr, str}) => {
  return (
    <li><Icofont icon="icofont-rounded-right"></Icofont> <strong>{strongStr}</strong> {str}</li>
  )
}

export default ListIcofont
