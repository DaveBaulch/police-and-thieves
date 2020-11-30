import React from 'react';

const Searches = ({ searches }) => {
  return <div>Searches: </div>;

  searches.map((search) => {
    return { search.age_range };
  });
};
export default Searches;
