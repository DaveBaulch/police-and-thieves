import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return (
    <div>
      <ul>
        <li>Item1: {selectedSearchItem.age_range}</li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
