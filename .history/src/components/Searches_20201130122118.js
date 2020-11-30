import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);
  let searchList = null;

  if (props.searches) {
    searchList = props.searches.map((search) => {
      return (
        <div>
          <ul style={ border: 1px solid}>
            <li>{search.age_range}</li>
            <li>{search.age_range}</li>
            <li>{search.age_range}</li>
          </ul>
        </div>
      );
    });
  }
  return <div>Searches: {searchList}</div>;
};
export default Searches;
