import { Component } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';

const Forces = (props) => {
  console.log(props.forces);

  return (
    <Dropdown options={this.props.forces} />
  );
};

export default Forces;
