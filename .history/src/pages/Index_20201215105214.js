import '../App.css';
import React from 'react';
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import Searches from '../components/Searches';
import SearchesItemDetail from '../components/SearchesItemDetail';
import MapContainer from '../components/MapContainer';
import FormSelect from '../components/FormSelect';

class Index extends React.Component {
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
    searchDataLoaded: false,
    selectedSearchItem: null
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



  componentDidMount() {

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
      <div>
        <div className="ui container">
          <h1>UK force data API</h1>

          <div className="ui segment">
            <div className="ui grid">
              <div className="ui row">
                <div className="five wide column">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
