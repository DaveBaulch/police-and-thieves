import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);
  const searchList = null;

  if (props.searches) {
    const searchList = props.searches.map((search) => {
      return <p>{search.age_range}}</p>;
    });
  }
  return <div>Searches: {searchList}</div>;
};
export default Searches;
