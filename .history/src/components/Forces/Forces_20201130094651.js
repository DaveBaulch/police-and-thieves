import { Component } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';

class Forces extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   forces: []
    // };
  }

  render() {
    console.log(this.state.forces);
    return <Dropdown options={this.state.forces} />;
  }
}

export default Forces;
