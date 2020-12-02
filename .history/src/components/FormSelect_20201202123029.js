import React from 'react';

const Dropdown = (props) => {
  return (
    <>
      <label htmlFor="props.name">Choose a force:</label>
      <select name="forces" id="forces" onChange={props.onSelectChange}>
        {props.forces.map((item) => {
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
export default Dropdown;
