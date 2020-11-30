import React from 'react';

const Searches = ({ searches }) => {

  const saearchesList = searches.map((search) => {
    return { search.age_range };
  });

   return <div>Searches: </div>;
};
export default Searches;
