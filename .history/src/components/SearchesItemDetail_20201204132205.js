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
        <li>Legislation: {selectedSearchItem.legislation}</li>
        <li>
          Location: {selectedSearchItem.location.latitude},{' '}
          {selectedSearchItem.location.longitude}
        </li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
