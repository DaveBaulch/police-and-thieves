import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);
  let searchList = null;

  if (props.searches) {
    searchList = props.searches.map((search, index) => {
      return (
        <li key={index} className="ui segment" style={{ listStyle: 'noen' }}>
          Gender: {search.gender}, Age range: {search.age_range}, Search type:{' '}
          {search.object_of_search}
        </li>
      );
    });
  }
  return (
    <div>
      Searches: <ul>{searchList}</ul>
    </div>
  );
};
export default Searches;
