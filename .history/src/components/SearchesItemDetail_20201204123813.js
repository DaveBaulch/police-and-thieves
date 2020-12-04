import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  // const itemKeys = Object.keys(selectedSearchItem);
  // console.log(itemKeys);

  const searchDetail = Object.entries(selectedSearchItem).forEach(
    ([key, value]) => {
      console.log(key + ': ' + value);
      return key + ': ' + value;
    }
  );

  return { searchDetail };
};

export default SearchesItemDetail;
