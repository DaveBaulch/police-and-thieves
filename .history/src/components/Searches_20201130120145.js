import React from 'react';

const Searches = ({ searches }) => {
  return <div>Searches: </div>;

  {
    searches.map((item) => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });
  }
};
export default Searches;
