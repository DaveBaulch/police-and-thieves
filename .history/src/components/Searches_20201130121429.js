import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

    if (this.props.data) {
  const searchList = props.searches.map((search) => {
    return <p>{search.id}</p>;
  });

  return <div>{searchList}</div>;
};
export default Searches;
