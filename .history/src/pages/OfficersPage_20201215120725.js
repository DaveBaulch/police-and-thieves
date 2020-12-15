import React from 'react';
import policeapi from '../apis/policeapi';

class OfficerPage extends React.Component {
  state = {
    selectedForceOfficers: []
  };

  renderedOfficers()) this.state.selectedForceOfficers.map((officer) => {
    return <div>{officer.name}</div>;
  });

  componentDidMount() {
    policeapi
      .get(`/forces/${this.props.match.params.id}/people`)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Office Page</h1>
        {renderedOfficers}
      </div>
    );
  }
}

export default OfficerPage;
