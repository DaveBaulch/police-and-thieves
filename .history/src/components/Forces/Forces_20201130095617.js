import { Component } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';

class Forces extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.forces);
    return <Dropdown options={this.props.forces} />;
  }
}

export default Forces;
