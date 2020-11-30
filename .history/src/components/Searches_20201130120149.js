import React from 'react';

const Searches = ({ searches }) => {
  return <div>Searches: </div>;

  {
    searches.map((item) => {
      return (
        
          {item.name}
        </option>
      );
    });
  }
};
export default Searches;
