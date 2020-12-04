import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const MapContainer = ({ lat, long }) => {
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

  }
  state =
    {
    errorMessage: '',
    mapStyles: {
      height: '100vh',
      width: '100%'
    },
    defaultCenter: {
      lat: this.props.lat,
      lng: this.props.lng
    }
  };

  // const mapStyles = {
  //   height: '100vh',
  //   width: '100%'
  // };

  // const defaultCenter = {
  //   lat: lat,
  //   lng: long
  // };

  // renderContent() {
  //   if (this.state.errorMessage && !this.state.lat) {
  //     return <div>Error: {this.state.errorMessage}</div>;
  //   }
  //   if (!this.state.errorMessage && this.state.lat) {
  //     //return <div>Latitude: {this.state.lat}</div>;
  //     return <SeasonDisplay lat={this.state.lat} />;
  //   }
  //   return <Spinner message="Please accept location request" />;
  // }

  render() {
    return (
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={this.state.mapStyles}
          zoom={17}
          center={this.state.defaultCenter}
        />
      </LoadScript>
    );
  }
}

export default MapContainer;
