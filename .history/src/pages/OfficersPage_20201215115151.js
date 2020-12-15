import React from 'react';

class OfficerPage extends React.Component {

  component
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
