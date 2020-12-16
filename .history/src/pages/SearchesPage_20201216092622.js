import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

class SearchesPage extends React.Component {
  state = {
    selectedForceSearches: []
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if () {
      
    }
    return (
      <div>
        <h1>Force Searches - {this.props.location.state.selectedForceName}</h1>
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>
        <br />
        <br />
        <ul style={{ padding: '0' }}>{this.renderedSearches()}</ul>
      </div>
    );
  }
}

export default SearchesPage;
