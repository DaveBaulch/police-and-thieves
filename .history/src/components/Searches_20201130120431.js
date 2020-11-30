import React from 'react';

const Searches = (props) => {

  const searchesList = searches.map((search) => {
    return { search.age_range };
  });

   return <div>Searches: {searchesList}</div>;
};
export default Searches;
