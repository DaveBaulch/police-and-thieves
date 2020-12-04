import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Spinner from './Spinner';

// const MapContainer = ({ lat, long }) => {
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      mapStyles: {
        height: '100vh',
        width: '100%'
      }
    };
  }

  // const mapStyles = {
  //   height: '100vh',
  //   width: '100%'
  // };

  // const defaultCenter = {
  //   lat: lat,
  //   lng: long
  // };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
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
