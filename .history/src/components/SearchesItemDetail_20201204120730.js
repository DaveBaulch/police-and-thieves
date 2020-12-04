import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const searchDetail = Object.entries(selectedSearchItem).map(
    (key, value, index) => {
      return <li key={index}>{key}: {value</li>;
    }
  );

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
