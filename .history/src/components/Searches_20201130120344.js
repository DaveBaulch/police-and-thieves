import React from 'react';

const Searches = ({ searches }) => {

  searches.map((search) => {
    return { search.age_range };
  });
};
export default Searches;
