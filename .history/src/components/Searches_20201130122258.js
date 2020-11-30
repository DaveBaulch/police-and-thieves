import React from 'react';

const Searches = (props) => {
  console.log('Props:' + props.searches);
  let searchList = null;

  if (props.searches) {
    searchList = props.searches.map((search) => {
      return (
            <li>{search.gender}
            {search.age_range}{"Controlled drugs"}</li>
        </div>
      );
    });
  }
  return <div>Searches: <ul>{searchList}</ul></div>;
};
export default Searches;
