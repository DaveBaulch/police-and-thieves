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


  const renderedOfficers = selectedForceOfficers.map((image) => {
    //return <img src={urls.regular} alt={description} key={id} />;
    return <ImageCard key={image.id} image={image} />;
  });
  
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
