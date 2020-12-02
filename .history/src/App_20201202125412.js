import './App.css';
import React from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';
import Searches from './components/Searches';
import MapContainer from './components/MapContainer';
import FormSelect from './components/FormSelect';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null,
    selectedForceName: '',
    selectedForceUrl: '',
    selectedForceDescription: '',
    selectedSeachData: [],
    latitude: null,
    longitude: null,
    errorMessage: '',
    genderOptions: [],
    offenceOptions: [],
    filterTerms: {
      genderFilterTerm: '',
      offenceFilterTerm: ''
    },
    searchDataLoaded: false
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

  onFormSelectChange = (event) => {
    const { filterTerms } = this.state.filterTerms;
    console.log('Form filter changed');
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    filterTerms
    this.setState({ filterTerms[genderFilterTerm] : value });
  };

  // onGenderChange = (event) => {
  //   console.log('Gender filter changed');
  //   const genderTerm = event.target.options[event.target.selectedIndex].value;
  //   console.log(genderTerm);
  //   this.setState({ genderFilterTerm: genderTerm });
  // };

  // onOffenceChange = (event) => {
  //   console.log('Offence filter changed');
  //   const offenceTerm = event.target.options[event.target.selectedIndex].value;
  //   console.log(offenceTerm);
  //   this.setState({ offenceFilterTerm: offenceTerm });
  // };

  getSearches = () => {
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

        const selectedSearchData = response.data;

        // TODO - get the tpes of search/gender available from the returned values and create filter components
        let genderOptions = Array.from(
          new Set(selectedSearchData.map(({ gender }) => gender))
        );
        console.log(genderOptions);

        let offenceOptions = Array.from(
          new Set(
            selectedSearchData.map(({ object_of_search }) => object_of_search)
          )
        );

        console.log(offenceOptions);

        this.setState({
          selectedSearchData: selectedSearchData,
          searchDataLoaded: true,
          genderOptions: genderOptions.filter(Boolean), // remove null values
          offenceOptions: offenceOptions.filter(Boolean), // remove null values
          genderFilterTerm: genderOptions[0],
          offenceFilterTerm: offenceOptions[0]
        });
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
        this.setState({ forces: response.data });
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
        {!this.state.searchDataLoaded && (
          <button onClick={this.getSearches}>
            Get stop and searches for these co-ordinates
          </button>
        )}
        <br />

        {/*  TODO : create filter components and pass options in from state  */}

        {this.state.selectedSearchData && (
          <React.Fragment>
            <h2>Filter results</h2>
            <FormSelect
              name={'genderFilterTerm'}
              items={this.state.genderOptions}
              onFormSelectChange={this.onFormSelectChange}
            />
          </React.Fragment>
        )}
        {this.state.selectedSearchData && (
          <FormSelect
            name={'offenceFilterTerm'}
            items={this.state.offenceOptions}
            onFormSelectChange={this.onFormSelectChange}
          />
        )}
        <hr />
      </div>
    );
  }
}

export default App;
