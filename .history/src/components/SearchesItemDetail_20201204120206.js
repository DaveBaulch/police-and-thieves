import React from 'react';

const SearchesItemDetail = ({ selectedSearchItem }) => {
  if (!selectedSearchItem) {
    return <div>Please select an item from the left</div>;
  }

  const itemDetail = return  Object.keys(datalist).map((item,index) => {
                return(
                  <option value={datalist[item].code} key={index}>
                      {datalist[item].symbol}
                  </option>
                )
            })

  return (
    <ul>
      <li></li>
    </ul>
  )
};

export default SearchesItemDetail;
