import React from 'react';

const OfficerDetail = ({ officerDetail }) => {
  console.log('Props:' + officerDetail);
  let searchList = null;

    detailsList = searches.map((search, index) => {
      return (
        <li
          key={index}
          className="ui segment search-item"
          style={{ listStyle: 'none' }}
          onClick={() => onSearchItemSelect(search)}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    });
  }
  return (
    <div>
      {detailsList}
    </div>
  );
};

export default OfficerDetail;
