import React from 'react';

const Searches = (props) => {
  console.log(props.searches);

  const searchesList = props.searches.map((item) => {
    return { <p>test</p> };
  });

return <div>Searches: { searchesList }</div>;
};
export default Searches;
