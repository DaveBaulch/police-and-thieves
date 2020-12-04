import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  return <h2>Search item detail</h2>;
    if (!selectedSearchItem) {
      return <div>Loading...</div>;
    }

};

export default SearchesItemDetail;
