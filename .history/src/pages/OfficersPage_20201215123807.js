import React from 'react';
import policeapi from '../apis/policeapi';

class OfficerPage extends React.Component {
  state = {
    selectedForceOfficers: []
  };

  contactDetails(contactDetails) {
    console.log('Details: ' + contactDetails);
    return Object.entries(contactDetails).forEach(([key, value]) => {
      console.log(key);
      console.log(value);
      return (
      )
    });
  }

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
          <h3>Contact details</h3>
          {this.contactDetails(officer.contact_details)}
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
