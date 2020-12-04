import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  const searchItemArray = '<li>test</li>';

  return <ul>{searchItemArray}</ul>;
};

export default SearchesItemDetail;
