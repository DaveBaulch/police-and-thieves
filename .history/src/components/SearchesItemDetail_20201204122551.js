import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const itemKeys = Object.keys(selectedSearchItem);
  console.log(itemKeys);

  const searchDetail = itemKeys.forEach((key, index) => {
    console.log(key + ': ' + selectedSearchItem[key]);
    return (
      <li key={index}>
        `${key}: ${selectedSearchItem[key]}`
      </li>
    );
  });

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
