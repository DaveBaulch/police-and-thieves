import React from 'react';

class OfficerPage extends React.Component {

  componentDidMount() {
    policeapi
      .get(`/forces/${selectedForceName}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedForceName: response.data.name });
        this.setState({ selectedForceUrl: response.data.url });
        this.setState({
          selectedForceDescription: response.data.description
        });
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
