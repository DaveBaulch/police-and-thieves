import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  console.log('Item' + selectedSearchItem);

  // const searchItemArray = <li>test</li>;

  const searchItemArray = Object.entries(selectedSearchItem);

  console.log(Object.values(searchItemArray));

  const detailListItems = searchItemArray.forEach(([key, value]) => {
    console.log('key'); // 'one'
    console.log(key); // 'one'
    console.log(value); // 1
    // return (
    //   <li>
    //     `${key} : ${value}`
    //   </li>
    // );
  });

  console.log('List' + detailListItems);

  return (
    <div>
      <ul>
      
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
