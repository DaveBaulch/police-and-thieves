import React from 'react';

const SearchesItemDetail = ({
  selectedSearchItem,
  selectedSearchItem: {
    age_range,
    datetime,
    gender,
    involved_person,
    legislation,
    object_of_search,
    outcome,
    officer_defined_ethnicity,
    self_defined_ethnicity
  }
}) => {
  if (!selectedSearchItem) {
    return <div>c</div>;
  }

  return (
    <div>
      <ul>
        <li>Age range: {age_range}</li>
        <li>Date: {datetime}</li>
        <li>Gender: {gender}</li>
        <li>Person involved: {selectedSearchItem.involved_person}</li>
        <li>Legislation: {selectedSearchItem.legislation}</li>
        <li>Object of search: {selectedSearchItem.object_of_search}</li>
        <li>Outcome: {selectedSearchItem.outcome}</li>
        <li>
          Officer defined ethnicity:{' '}
          {selectedSearchItem.officer_defined_ethnicity}
        </li>
        <li>
          Self defined ethnicity: {selectedSearchItem.self_defined_ethnicity}
        </li>
      </ul>
    </div>
  );
};

export default SearchesItemDetail;
