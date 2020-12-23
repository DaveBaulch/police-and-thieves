import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Spinner from '../Spinner';
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapStyles: {
        height: '400px',
        width: '100%'
      }
    };
  }

  renderContent() {
     const { errorMessage, lat, lng } = this.props;

    if (errorMessage && !lat && !lng) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat && this.props.lng) {
      return (
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={this.state.mapStyles}
            zoom={17}
            center={{ lat: this.props.lat, lng: this.props.lng }}
          />
        </LoadScript>
      );
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {

    return <div>{this.renderContent()}</div>;
  }
}

export default MapContainer;
