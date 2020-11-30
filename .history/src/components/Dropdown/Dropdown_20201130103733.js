import React from 'react';

onChange = (event) => {
  this.setState({ term: event.target.value });
};


const Dropdown = ({ forces, onSelectChange }) => {
  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onChange={this.onSelectChange}>
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
