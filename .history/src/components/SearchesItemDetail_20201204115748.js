import React from 'react';

const SearchesItemDetail = () => {
  if (!this.props.selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  return this.props.selectedSearchItem;
};

export default SearchesItemDetail;
