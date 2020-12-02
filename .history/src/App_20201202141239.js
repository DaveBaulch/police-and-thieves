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
    latitude: null,
    longitude: null,
    errorMessage: '',
    selectedSeachData: [],
    genderOptions: [],
    offenceOptions: [],
    filterTerms: {
      genderFilterTerm: '',
      offenceFilterTerm: ''
    },
    filteredSearchData: [],
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

  onFilterSelectChange = (event) => {
    const { filterTerms } = this.state;
    console.log('Form filter changed');
    filterTerms[event.target.name] = event.target.value;
    this.setState({ filterTerms });
    this.filterSearchData();
  };

  filterSearchData = () => {
    const filteredSearchData = this.state.selectedSearchData.filter(
      (item) =>
        (item.gender = this.state.filterTerms.genderFilterTerm) &&
        (item.object_of_search = this.state.filterTerms.offenceFilterTerm)
    );
    this.setState({ filteredSearchData: filteredSearchData });
  };

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
          filterTerms: {
            genderFilterTerm: genderOptions[0],
            offenceFilterTerm: offenceOptions[0]
          }
        });

        this.filterSearchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onVideoSelect = (video) => {
    console.log('From the app!', video);
    this.setState({ selectedVideo: video });
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
        <div className="ui container">
          <h1>UK force data API</h1>

          <div className="ui segment">
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
          </div>

          <div className="ui segment">
            <h2>
              Your current coordinates: {this.state.latitude},{' '}
              {this.state.longitude}
            </h2>
            <MapContainer
              lat={this.state.latitude}
              long={this.state.longitude}
            />
          </div>

          <div className="ui segment">
            <div className="ui grid">
              <div className="ui row">
                <div className="five wide column">
                  {!this.state.searchDataLoaded && (
                    <button onClick={this.getSearches}>
                      Get stop and searches for these co-ordinates
                    </button>
                  )}
                </div>
              </div>

              {this.state.selectedSearchData && (
                <React.Fragment>
                  <h2>Filter results</h2>
                  <FormSelect
                    name={'genderFilterTerm'}
                    items={this.state.genderOptions}
                    onFilterSelectChange={this.onFilterSelectChange}
                  />
                  <FormSelect
                    name={'offenceFilterTerm'}
                    items={this.state.offenceOptions}
                    onFilterSelectChange={this.onFilterSelectChange}
                  />
                </React.Fragment>
              )}

              <div className="ui row">
                <div className="five wide column" style={{ listStyle: 'none' }}>
                  {this.state.searchDataLoaded && (
                    <Searches searches={this.state.filteredSearchData} />
                  )}
                </div>
                <div className="eleven wide column">
                  Selected item will go here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
