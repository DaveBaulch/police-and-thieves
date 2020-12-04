import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const itemKeys = Object.keys(selectedSearchItem);
  console.log(itemKeys);

  const searchDetail = itemKeys.forEach([key, value]) => {
    console.log(key + ': ' + value);
    return <li>{key}: {value}</li>;
  };

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
