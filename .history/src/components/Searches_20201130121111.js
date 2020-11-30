import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);

  {
    props.searches.map((item) => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });
  }
};
export default Searches;
