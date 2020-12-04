import React from 'react';

const SearchesItemDetail = () => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return selectedSearchItem;
};

export default SearchesItemDetail;
