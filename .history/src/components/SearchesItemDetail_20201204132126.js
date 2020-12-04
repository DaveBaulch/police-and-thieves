import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return (
    <div>
      <ul>
        <li>Age range: {selectedSearchItem.age_range}</li>
        <li>Date: {selectedSearchItem.dateTime}</li>
        <li>Gender: {selectedSearchItem.gender}</li>
        <li>Person involved: {selectedSearchItem.involved_person}</li>
        <li>legislation: {selectedSearchItem.age_range}</li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
