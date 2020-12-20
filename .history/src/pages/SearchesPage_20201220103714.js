import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Doughnut } from 'react-chartjs-2';

class SearchesPage extends React.Component {
  state = {
    selectedForceSearches: [],
    dataLoaded: false,
    ethnicityOptions: []
  };

  renderedSearches() {
    if (!this.state.selectedForceSearches.length) {
      return <div>No search details available for this force.</div>;
    }

    console.log('state: ' + this.state.selectedForceSearches);
    return this.state.selectedForceSearches.map((search, index) => {
      return (
        <li
          key={index}
          className="ui segment search-item"
          style={{ listStyle: 'none' }}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }

  componentDidMount() {
    policeapi
      .get(`/stops-force?force=${this.props.match.params.id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ selectedForceSearches: response.data });
        setTimeout(() => this.setState({ dataLoaded: true }), 500);

        let ethnicityOptions = Array.from(
          new Set(
            response.data.map(
              ({ self_defined_ethnicity }) => self_defined_ethnicity
            )
          )
        );
        this.setState({ ethnicityOptions: ethnicityOptions });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <div className="ui container">
            <h1>
              Force Searches - {this.props.location.state.selectedForceName}
            </h1>
            <Link to={'/'} className="ui button primary">
              Back to homepage
            </Link>

            <div className="ui grid">
              <div className="ui row">
                <div className="six wide column">
                  <ul style={{ padding: '0' }}>{this.renderedSearches()}</ul>
                </div>

                <div className="ten wide column">
                  <h2>Self-defined ethnicity</h2>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <Spinner message="Loading data..." />;
  }
}

export default SearchesPage;
