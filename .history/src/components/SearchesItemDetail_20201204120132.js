import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const itemDetail = Object.keys(selectedSearchItem).map(function (
    keyName,
    keyIndex
  ) {
    // use keyName to get current key's name
    // and a[keyName] to get its value
  });

  return (
    <ul>
      <li></li>
    </ul>
  )
};

export default SearchesItemDetail;
