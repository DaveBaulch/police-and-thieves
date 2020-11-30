import React from 'react';

const Dropdown = ({ forces, onSelectChange }) => {
  onSelectChange = (event) => {
    this.props.onSelectChange();
  };

  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onSubmit={this.onSelectChange}>
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
