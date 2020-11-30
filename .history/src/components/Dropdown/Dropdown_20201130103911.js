import React from 'react';

const onSelectChange = (event) => {
  this.props.onSelectChange();
};

const Dropdown = ({ forces, onSelectChange }) => {
  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onSelectChange={this.onSelectChange}>
        {forces.map((item) => {
          return (
            <option value={item.id} key="item.id">
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Dropdown;
