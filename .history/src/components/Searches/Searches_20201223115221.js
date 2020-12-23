import React from 'react';
import './Searches.css';

const Searches = ({ searches, onSearchItemSelect }) => {
  // console.log('Props:' + searches);
  let searchList = null;

  if (searches) {
    searchList = searches.map((search, index) => {
      return (
        <li
          key={`searches-{index}`}
          className="ui segment search-item no-bullets"
          onClick={() => onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }

  if (!searches.leth) {
    return <p>No results for your selection</p>;
  }

  return (
    <div>
      <h3>Click on an item to see full detail</h3>
      <ul className="no-padding">{searchList}</ul>
    </div>
  );
};
export default Searches;
