import { Component } from 'react';
import Dropdown from '../Dropdown';

class Forces extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   forces: []
    // };
  }

  render() {
    console.log(props.forces);
    return <Dropdown options={this.state.forces} />;
  }
}

export default Forces;
