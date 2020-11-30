import './App.css';
import React from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null,
    latitude: null,
    longitude: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      (err) => this.setState({ errorMessage: err.message })
    );

    axios
      //.get('https://data.police.uk/api/forces')
      .get(
        "`https://data.police.uk/api/crimes-street/all-crime?lat=${this.state.latitude}&lng={this.state.longitude}`")
      )
      .then((response) => {
        console.log(response.data);
        const forces = response.data;
        this.setState({ forces: forces });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Current coordinates: {this.state.latitude}, {this.state.longitude}
        </h1>
        <Dropdown forces={this.state.forces} />
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
