import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';

class OfficerPage extends React.Component {
  state = {
    selectedForceOfficers: []
  };

  renderedOfficers() {
    if (!this.state.selectedForceOfficers.length) {
      return <div>No officer details available for this force.</div>;
    }

    console.log('state' + this.state.selectedForceOfficers);
    return this.state.selectedForceOfficers.map((officer) => {
      return (
        <div key={officer.name}>
          <h2>{officer.name}</h2>
          <h3>Rank</h3>
          {officer.rank}

          {this.state.selectedForceUrl && (
          <h3>Bio</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: officer.bio
            }}
          ></div>
          

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
      .get(`/forces/${this.props.match.params.id}/people`)
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
        {this.renderedOfficers()}
      </div>
    );
  }
}

export default OfficerPage;
