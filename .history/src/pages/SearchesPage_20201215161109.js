import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';

class SearchesPage extends React.Component {
  state = {
    selectedForceSearches: []
  };

  renderedOfficers() {
    if (!this.state.selectedForceSearches.length) {
      return <div>No search details available for this force.</div>;
    }

    console.log('state' + this.state.selectedForceSearches);
    return this.state.selectedForceSearches.map((search) => {
      return (
        <div>
       )
    });
  }

  componentDidMount() {
    policeapi
      .get(`/stops-force?force=${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedForceOfficers: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Office Page</h1>
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>
        <br />
        <br />
        {this.renderedSearches()}
      </div>
    );
  }
}

export default SearchesPage;
