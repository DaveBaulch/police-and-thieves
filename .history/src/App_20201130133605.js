import './App.css';
import React, { Fragment } from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';
import Searches from './components/Searches';
import MapContainer from './components/MapContainer';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null,
    selectedForceName: '',
    selectedForceUrl: '',
    selectedForceDescription: '',
    selectedSeachData: '',
    latitude: null,
    longitude: null,
    errorMessage: '',
    genderFilterTerm: ''
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

  onGenderChange = (event) => {
    console.log('Gender filter hanged');
    const genderTerm = event.target.options[event.target.selectedIndex].value;
    console.log(genderTerm);
    this.setState({ genderFilterTerm: genderTerm });
  };

  getSearches = (event) => {
    console.log('Clicked');

    axios
      .get(
        'https://data.police.uk/api/stops-street?lat=' +
          this.state.latitude +
          '&lng=' +
          this.state.longitude
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedSearchData: response.data });
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
        <h1>UK force data API</h1>
        <h2>Select a force:</h2>
        <Dropdown
          forces={this.state.forces}
          onSelectChange={this.onSelectChange}
        />
        {this.state.selectedForce && (
          <h3>Selected force: {this.state.selectedForce}</h3>
        )}
        {this.state.selectedForceName && (
          <h3>Selected force name: {this.state.selectedForceName}</h3>
        )}
        {this.state.selectedForceUrl && (
          <h3>
            Selected force URL:{' '}
            <a href={this.state.selectedForceUrl}>
              {this.state.selectedForceUrl}
            </a>
          </h3>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.selectedForceDescription
          }}
        ></div>
        <hr />
        <h2>
          Your current coordinates: {this.state.latitude},{' '}
          {this.state.longitude}
        </h2>

        <MapContainer lat={this.state.latitude} long={this.state.longitude} />

        <hr />

        <button onClick={this.getSearches}>
          Get stop and searches for these co-ordinates
        </button>

        <br />

        {this.state.selectedSearchData && (
          <Fragment>
            <label htmlFor="genderFilter">Filter results</label>
            <select id="genderFilter" onChange={this.onGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Fragment>
        )}

        {this.state.selectedSearchData && (
          <Searches
            searches={this.state.selectedSearchData.filter((gender) =>
              name.includes('J')
            )}
          />
        )}

        <hr />
      </div>
    );
  }
}

export default App;
