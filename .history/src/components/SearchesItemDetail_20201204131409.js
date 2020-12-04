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
    return (
      <li>
        `${key} : ${value}`
      </li>
    );
  });


  if (searches) {
    searchList = searches.map((search, index) => {
      return (
        <li
          key={index}
          className="ui segment search-item"
          style={{ listStyle: 'none' }}
          onClick={() => onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }
  retur;

  console.log('List' + detailListItems);

  return (
    <div>
      <ul>{detailListItems}</ul>
    </div>
  );
};

export default SearchesItemDetail;
