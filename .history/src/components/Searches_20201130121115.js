import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  {
    props.searches.map((item) => {
      return (
        
          {item.name}
        </option>
      );
    });
  }
};
export default Searches;
