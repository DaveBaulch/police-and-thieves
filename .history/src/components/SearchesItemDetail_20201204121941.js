import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const itemKeys = Object.keys(selectedSearchItem);
  itemKeys.forEach((key, index) => {
    return <li>`${key}: ${selectedSearchItem[key]}`);
  });
  // const searchDetail = Object.keys(selectedSearchItem).forEach(function ([
  //   key,
  //   value
  // ]) {
  //   return key;
  // });

  return <ul></ul>;
};

export default SearchesItemDetail;
