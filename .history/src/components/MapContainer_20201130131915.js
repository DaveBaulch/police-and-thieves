import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({lat, long}) => {
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    // lat: 41.3851,
    // lng: 2.1734
    
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBOlITbY3f-5yOS03pyDEXXba--Jf-660Y">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
