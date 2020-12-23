import React from 'react';

const SearchesItemDetail = ({
  selectedSearchItem: { age_range, datetime, gender, involved_person }
}) => {
  if (!selectedSearchItem) {
    return <div>c</div>;
  }

  return (
    <div>
      <ul>
        <li>Age range: {selectedSearchItem.age_range}</li>
        <li>Date: {selectedSearchItem.datetime}</li>
        <li>Gender: {selectedSearchItem.gender}</li>
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
