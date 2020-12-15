import React from 'react';
import policeapi from '../apis/policeapi';

class OfficerPage extends React.Component {
  state = {
    selectedForceOfficers: []
  };

  renderedOfficers() {
    console.log('state' + this.state.selectedForceOfficers);
    return this.state.selectedForceOfficers.map((officer) => {
      return (
        <div key={officer.name}>
          <h2>{officer.name}</h2>
          <h3>Rank</h3>
          {officer.rank}
          <h3>Bio</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: officer.bio
            }}
          ></div>

          {!Object.keys(officer.contact_details).length == 0) && (
            <React.Fragment>
              <h3>Contact details</h3>
              <strong>{Object.keys(officer.contact_details)} : </strong>
              <a href={officer.contact_details}>
                {Object.values(officer.contact_details)}
              </a>
            </React.Fragment>
          )}

          <hr />
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
        {this.renderedOfficers()}
      </div>
    );
  }
}

export default OfficerPage;
