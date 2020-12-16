import '../App.css';
import React from 'react';
import Searches from '../components/Searches';
import SearchesItemDetail from '../components/SearchesItemDetail';
import MapContainer from '../components/MapContainer';
import FormSelect from '../components/FormSelect';
import policeapi from '../apis/policeapi';
import Modal from 'react-modal';
import { Doughnut } from 'react-chartjs-2';

class LocationPage extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    errorMessage: '',
    selectedSearchData: [],
    genderOptions: [],
    offenceOptions: [],
    filterTerms: {
      genderFilterTerm: '',
      offenceFilterTerm: ''
    },
    filteredSearchData: [],
    searchDataLoaded: false,
    selectedSearchItem: null,
    modalIsOpen: false,
    customStyles: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  };

  // const subtitle;

  openModal = () => {
    //setIsOpen(true)
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  closeModal = () => {
    //setIsOpen(false);
    this.setState({ modalIsOpen: false });
  };

  onFilterSelectChange = (event) => {
    const filterTerms = this.state.filterTerms;
    console.log('Form filter changed');
    filterTerms[event.target.name] = event.target.value;
    this.setState({ filterTerms: filterTerms });
    this.filterSearchData();
  };

  filterSearchData = () => {
    const filteredSearchData = this.state.selectedSearchData.filter(
      (item) =>
        item.gender === this.state.filterTerms.genderFilterTerm &&
        item.object_of_search === this.state.filterTerms.offenceFilterTerm
    );
    this.setState({ filteredSearchData: filteredSearchData });
  };

  getOffenceData = () => 
    return [10, 100];
  }

  getSearches = () => {
    console.log('Clicked');

    policeapi
      .get(
        `/stops-street?lat=${this.state.latitude}&lng=${this.state.longitude}`
      )
      .then((response) => {
        console.log('Data: ' + response.data);

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

        let maleSearches = selectedSearchData.filter(function (search) {
          return search.gender === 'Male';
        });

        let femaleSearches = selectedSearchData.filter(function (search) {
          return search.gender === 'Female';
        });

        this.setState({
          selectedSearchData: selectedSearchData,
          searchDataLoaded: true,
          genderOptions: genderOptions.filter(Boolean), // remove null values
          offenceOptions: offenceOptions.filter(Boolean), // remove null values
          filterTerms: {
            genderFilterTerm: genderOptions[0],
            offenceFilterTerm: offenceOptions[0]
          },
          maleSearches: maleSearches.length,
          femaleSearches: femaleSearches.length
        });

        this.filterSearchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSearchItemSelect = (search) => {
    console.log('From the list!', search);
    this.setState({ selectedSearchItem: search });
    this.openModal();
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
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <h1>UK force data API</h1>

          <div className="ui segment">
            {this.state.latitude && (
              <h2>
                Your current coordinates: {this.state.latitude},{' '}
                {this.state.longitude}
              </h2>
            )}
            <MapContainer
              errorMessage={this.state.errorMessage}
              lat={this.state.latitude}
              lng={this.state.longitude}
            />
          </div>

          <div className="ui segment">
            <div className="ui grid">
              <div className="ui row">
                <div className="five wide column">
                  {!this.state.searchDataLoaded && (
                    <button
                      onClick={this.getSearches}
                      className="ui button primary"
                    >
                      Get stop and searches for these co-ordinates
                    </button>
                  )}
                </div>
              </div>

              {this.state.selectedSearchData.length && (
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
                <div className="six wide column" style={{ listStyle: 'none' }}>
                  {this.state.searchDataLoaded && (
                    <Searches
                      searches={this.state.filteredSearchData}
                      onSearchItemSelect={this.onSearchItemSelect}
                    />
                  )}
                </div>
                <div className="ten wide column searches">
                  {this.state.selectedSearchData.length && (
                    <React.Fragment>
                      <h3>Overall searches by gender</h3>
                      <Doughnut
                        data={{
                          labels: ['Male', 'Female'],
                          datasets: [
                            {
                              label: 'Crime by gender',
                              data: [
                                this.state.maleSearches,
                                this.state.femaleSearches
                              ],
                              backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)'
                              ],
                              borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)'
                              ],
                              borderWidth: 1
                            }
                          ]
                        }}
                      />

                      <h3>
                        Searches by offence type -{' '}
                        {this.state.filterTerms.offenceFilterTerm}
                      </h3>
                      <Doughnut
                        data={{
                          labels: ['Male', 'Female'],
                          datasets: [
                            {
                              label: 'Crime by gender',
                              data: this.getOffenceData(),
                              backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)'
                              ],
                              borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)'
                              ],
                              borderWidth: 1
                            }
                          ]
                        }}
                      />
                    </React.Fragment>
                  )}
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.state.customStyles}
                    contentLabel="Example Modal"
                  >
                    <button onClick={this.closeModal}>close</button>
                    <h2>Search details</h2>
                    <SearchesItemDetail
                      selectedSearchItem={this.state.selectedSearchItem}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationPage;
