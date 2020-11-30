import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);
  let searchList = null;

  if (props.searches) {
    searchList = props.searches.map((search) => {
      return <div>{search.age_range}</div>;
    });
  }
  return <div>Searches: {searchList}</div>;
};
export default Searches;
