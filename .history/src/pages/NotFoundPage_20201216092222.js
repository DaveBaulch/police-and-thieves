import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {

  render() {
    return (
      <div>
        <h1>$04 - oage bot founbd</h1>
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
