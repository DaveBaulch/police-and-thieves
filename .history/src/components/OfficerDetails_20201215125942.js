import React from 'react';

const OfficerDetail = ({ details }) => {
  console.log('Props: ' + details);

  const detailsList = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(    Object.entries(pridetailsces).map(([key, value]) => [key, value * 2])
).map(([key, value]) => [key, value * 2])
  );

  return <div>{detailsList}</div>;
};

export default OfficerDetail;
