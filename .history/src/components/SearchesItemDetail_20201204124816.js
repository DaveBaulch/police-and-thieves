import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  // const itemKeys = Object.keys(selectedSearchItem);
  // console.log(itemKeys);

  const searchDetail = Object.keys(selectedSearchItem).map(key =>
    <li key={key}>{selectedSearchItem[key]}</li>
  }


  
};

export default SearchesItemDetail;
