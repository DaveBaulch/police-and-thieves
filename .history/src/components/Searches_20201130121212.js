import React from 'react';

const SearchesList = (props) => {
  console.log('Props:' + props.searches);

  return (
  {
    props.searches.map((item) => {
      return (  
          {item.name}
      );
    });
    }
  )
};
export default Searches;
