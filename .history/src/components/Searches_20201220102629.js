import './Searches.css';
import React from 'react';

const Searches = ({ searches, onSearchItemSelect }) => {
  console.log('Props:' + searches);
  let searchList = null;

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
  return (
    <div>
      <div className="ui container">
        <h3>Click on an item to see full detail</h3>
            <div className="ui grid">
                <div className="ui row">
                  <div className="eight wide column">
                    
              <ul style={{ padding: 0 }}>{searchList}</ul>
              
              <>
      </div>
    </div>
  );
};
export default Searches;
