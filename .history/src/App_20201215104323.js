import './App.css';
import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Searches from './components/Searches';
import SearchesItemDetail from './components/SearchesItemDetail';
import MapContainer from './components/MapContainer';
import FormSelect from './components/FormSelect';
import Header from './components/Header';
import Index from './pages/Index';
import Page1 from './pages/Page1';
import createBrowserHistory from './history';

class App extends React.Component {
  // state = {
  //   forces: [],
  //   selectedForce: null,
  //   selectedForceName: '',
  //   selectedForceUrl: '',
  //   selectedForceDescription: '',
  //   latitude: null,
  //   longitude: null,
  //   errorMessage: '',
  //   selectedSeachData: [],
  //   genderOptions: [],
  //   offenceOptions: [],
  //   filterTerms: {
  //     genderFilterTerm: '',
  //     offenceFilterTerm: ''
  //   },
  //   filteredSearchData: [],
  //   searchDataLoaded: false,
  //   selectedSearchItem: null
  // };

  // onSelectChange = (event) => {
  //   console.log('Changed');
  //   const selectedForceName =
  //     event.target.options[event.target.selectedIndex].value;
  //   console.log(selectedForceName);
  //   this.setState({ selectedForce: selectedForceName });

  //   axios
  //     .get('https://data.police.uk/api/forces/' + selectedForceName)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ selectedForceName: response.data.name });
  //       this.setState({ selectedForceUrl: response.data.url });
  //       this.setState({ selectedForceDescription: response.data.description });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // onFilterSelectChange = (event) => {
  //   const { filterTerms } = this.state;
  //   console.log('Form filter changed');
  //   filterTerms[event.target.name] = event.target.value;
  //   this.setState({ filterTerms });
  //   this.filterSearchData();
  // };

  // filterSearchData = () => {
  //   const filteredSearchData = this.state.selectedSearchData.filter(
  //     (item) =>
  //       (item.gender = this.state.filterTerms.genderFilterTerm) &&
  //       (item.object_of_search = this.state.filterTerms.offenceFilterTerm)
  //   );
  //   this.setState({ filteredSearchData: filteredSearchData });
  // };

  // getSearches = () => {
  //   console.log('Clicked');

  //   axios
  //     .get(
  //       'https://data.police.uk/api/stops-street?lat=' +
  //         this.state.latitude +
  //         '&lng=' +
  //         this.state.longitude
  //     )
  //     .then((response) => {
  //       console.log(response.data);

  //       const selectedSearchData = response.data;

  //       let genderOptions = Array.from(
  //         new Set(selectedSearchData.map(({ gender }) => gender))
  //       );
  //       console.log(genderOptions);

  //       let offenceOptions = Array.from(
  //         new Set(
  //           selectedSearchData.map(({ object_of_search }) => object_of_search)
  //         )
  //       );

  //       console.log(offenceOptions);

  //       this.setState({
  //         selectedSearchData: selectedSearchData,
  //         searchDataLoaded: true,
  //         genderOptions: genderOptions.filter(Boolean), // remove null values
  //         offenceOptions: offenceOptions.filter(Boolean), // remove null values
  //         filterTerms: {
  //           genderFilterTerm: genderOptions[0],
  //           offenceFilterTerm: offenceOptions[0]
  //         }
  //       });

  //       this.filterSearchData();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // onSearchItemSelect = (search) => {
  //   console.log('From the list!', search);
  //   this.setState({ selectedSearchItem: search });
  // };

  // componentDidMount() {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) =>
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       }),
  //     (err) => this.setState({ errorMessage: err.message })
  //   );

  //   axios
  //     .get('https://data.police.uk/api/forces')
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ forces: response.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory}>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/page1" exact component={Page1} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
