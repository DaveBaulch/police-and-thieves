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
    console.log(this.props.forces);
    return <Dropdown options={props.forces} />;
  }
}

export default Forces;
