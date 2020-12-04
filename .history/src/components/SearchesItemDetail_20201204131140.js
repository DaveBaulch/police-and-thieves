import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  // const searchItemArray = <li>test</li>;

  const searchItemArray = Object.entries(selectedSearchItem);

  const detailListItems = searchItemArray.forEach(([key, value]) => {
    console.log(key); // 'one'
    console.log(value); // 1
    return <li>{ }}</li>;
  });

  return (
    <div>
      <ul>{detailListItems}</ul>
    </div>
  );
};

export default SearchesItemDetail;
