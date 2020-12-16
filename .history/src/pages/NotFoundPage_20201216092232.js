import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>404 - page not found</h1>
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>
        <br />
        <br />
      </div>
    );
  }
}

export default NotFoundPage;
