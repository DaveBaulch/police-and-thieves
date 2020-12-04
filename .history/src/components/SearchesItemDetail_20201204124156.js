import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  // const itemKeys = Object.keys(selectedSearchItem);
  // console.log(itemKeys);

  const searchDetail = Object.entries(selectedSearchItem).forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    console.log(key + ': ' + value);
    return <li>{key}</li>;
  });

  return { searchDetail };
};

export default SearchesItemDetail;
