import React from 'react';

const OfficerDetail = ({ details }) => {
  console.log('Props: ' + details);

  const detailsList = details.map((officer, index) => {
    return <div>jkdjsa</div>;
  });

  return <div>{detailsList}</div>;
};

export default OfficerDetail;
