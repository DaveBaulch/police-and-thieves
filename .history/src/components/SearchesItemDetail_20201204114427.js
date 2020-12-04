import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  return <h2>Search item detail</h2>;
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }
};

export default SearchesItemDetail;
