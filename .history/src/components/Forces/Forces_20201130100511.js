import React from 'react';
// import Dropdown from '../Dropdown';

const Forces = (props) => {
  console.log(props.forces);

  return <Dropdown forces={props.forces} />;
};

export default Forces;
