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
    return this.state.selectedForceOfficers.map((officer) => {
      return (
        <div key={officer.name}>
          <h2>{officer.name}</h2>

          {officer.rank && (
            <React.Fragment>
              <h3>Rank</h3>
              {officer.rank}
            </React.Fragment>
          )}

          {officer.bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: officer.bio
                }}
              ></div>
            </React.Fragment>
          )}

          {!(Object.keys(officer.contact_details).length === 0) && (
            <React.Fragment>
              <h3>Contact details</h3>
              <strong>{Object.keys(officer.contact_details)} : </strong>
              <a href={officer.contact_details}>
                {Object.values(officer.contact_details)}
              </a>
            </React.Fragment>
          )}

          <br />
          <br />
          <hr />
          <br />
          <br />
        </div>
      );
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
