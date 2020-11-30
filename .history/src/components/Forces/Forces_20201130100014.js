import React from 'react';
import Dropdown from '../Dropdown';

const Forces = (props) => {
  console.log(props.forces);

  return <Dropdown options={props.forces} />;
};

export default Forces;
