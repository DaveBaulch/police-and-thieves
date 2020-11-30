import React from 'react';

const Searches = (props) => {
  console.log(props);

  const searchesList = props.searches.map((item) => {
    return { <p>item.age_range</p> };
  });

  return <div>Searches: </div>;
};
export default Searches;
