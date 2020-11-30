import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = ({ forces, onSelectChange }) => {
  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onChange={onSelectChange}>
        {forces.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(MapContainer);
