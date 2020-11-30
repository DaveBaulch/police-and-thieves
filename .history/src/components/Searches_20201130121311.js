import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  const searchList = props.searches.map((search) => {
    return <p>{search.id}</p>;
  });

  return <div className="image-list">{images}</div>;
};
export default Searches;
