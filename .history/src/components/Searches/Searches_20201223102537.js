import React from 'react';
import './Searches.css';

const Searches = ({ searches, onSearchItemSelect }) => {
  console.log('Props:' + searches);
  let searchList = null;

  if (searches) {
    searchList = searches.map((search, index) => {
      return (
        <li
          key={`searches-{index}`}
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
  return (
    <div>
      <h3>Click on an item to see full detail</h3>
      <ul style={{ padding: 0 }}>{searchList}</ul>
    </div>
  );
};
export default Searches;
