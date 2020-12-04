import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return (
    <div>
      <ul>
        <li>Item1: {selectedSearchItem[0]}</li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
