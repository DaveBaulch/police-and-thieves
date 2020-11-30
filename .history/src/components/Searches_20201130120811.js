import React from 'react';

const Searches = (props) => {
  console.log(props.searches);

  const searchesList = props.searches.map((item) => {
    return { <p></p> };
  });

  return <div>Searches: </div>;
};
export default Searches;
