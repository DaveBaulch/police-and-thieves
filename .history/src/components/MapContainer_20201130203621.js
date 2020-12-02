import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({ lat, long }) => {
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: lat,
    lng: long
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
