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
      return (
        <li>
          {key}: {value}
        </li>
      );
    }
  );

  console.log('Serarc details: ' + )

  return <ul>{searchDetail}</ul>;
};

export default SearchesItemDetail;
