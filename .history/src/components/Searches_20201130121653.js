import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  if (props.searches) {
    const searchList = props.searches.map((search) => {
      return <p>{search.age_range}}</p>;
    });
  }
  return <div>Searches</div>;
  // }
};
export default Searches;
