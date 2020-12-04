import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  const searchDetail = <li>;

  // const searchDetail = Object.keys(selectedSearchItem).map((key) => (
  //   <li>key</li>
  // ));

  return { searchDetail };
};

export default SearchesItemDetail;
