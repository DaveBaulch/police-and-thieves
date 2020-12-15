import React from 'react';

const OfficerDetail = ({ details }) => {
  console.log('Props: ' + details);

  const detailsList = details.map((detail, index) => {
    return <div></div>;
  });

  return <div>{detailsList}</div>;
};

export default OfficerDetail;
