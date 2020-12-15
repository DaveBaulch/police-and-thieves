import React from 'react';
class OfficerPage extends React.Component {

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>Office Page</h1>
      </div>
    );
  }
}


export default OfficerPage;
