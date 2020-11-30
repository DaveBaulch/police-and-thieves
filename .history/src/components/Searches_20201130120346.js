import React from 'react';

const Searches = ({ searches }) => {

  searches.map((search) => {
    return { search.age_range };
  });

   return <div>Searches: </div>;
};
export default Searches;
