import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  if (this.props.searches) {
    const searchList = props.searches.map((search) => {
      return <p>1</p>;
    });
  }
  return <div>Searches</div>;
  // }
};
export default Searches;
