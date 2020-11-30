import { Component } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';

const Forces = (props) => {
  console.log(this.props.forces);

  return (
    <Dropdown options={this.props.forces} />
  );
};

export default Forces;
