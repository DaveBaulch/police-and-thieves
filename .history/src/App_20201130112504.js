import './App.css';
import React from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null,
    selectedForceName: '',
    selectedForceUrl: '',
    selectedForceDescription: '',
    latitude: null,
    longitude: null,
    errorMessage: ''
  };

  onSelectChange = (event) => {
    console.log('Changed');
    const selectedForceName =
      event.target.options[event.target.selectedIndex].value;
    console.log(selectedForceName);
    this.setState({ selectedForce: selectedForceName });

    axios
      .get('https://data.police.uk/api/forces/' + selectedForceName)
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedForceName: response.data.name });
        this.setState({ selectedForceUrl: response.data.url });
        this.setState({ selectedForceDescription: response.data.description });
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .get('https://data.police.uk/api/forces')
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
        <Dropdown
          forces={this.state.forces}
          onSelectChange={this.onSelectChange}
        />

        {this.state.selectedForce && (
          <h2>Selected force: {this.state.selectedForce}</h2>
        )}

        {this.state.selectedForceName && (
          <h2>Selected force name: {this.state.selectedForceName}</h2>
        )}

        {this.state.selectedForceUrl && (
          <h2>
            Selected force URL:{' '}
            <a href={this.state.selectedForceUrl}>
              {this.state.selectedForceUrl}
            </a>
          </h2>
        )}

        <div danthis.state.selectedForceDescription}

        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
