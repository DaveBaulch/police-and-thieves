import React from 'react';
import policeapi from '../apis/policeapi';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {

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

export default NotFoundPage;
