import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {



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
        <h1>Officer Details - {this.props.location.state.selectedForceName}</h1>
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
