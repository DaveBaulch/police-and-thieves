import React from 'react';

const Searches = ({ forces }) => {
  return (
    <>
        {forces.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Searches;
