import React from 'react';
import policeapi from '../apis/policeapi';

class OfficerPage extends React.Component {
  state = {
    selectedForceOfficers: []
  };

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
        {this.props.match.params.id}
      </div>
    );
  }
}

export default OfficerPage;
