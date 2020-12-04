import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  const searchDetail = Object.keys(selectedSearchItem).map((key) => (
    <li key={key}>{selectedSearchItem[key]}</li>
  ));

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
