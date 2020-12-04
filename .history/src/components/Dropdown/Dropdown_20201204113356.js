import React from 'react';

// const Dropdown = ({ forces, onSelectChange }) => {
class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onSelectChange(event);
  };
  
  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces" onChange={onSelectChange}>
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
export default Dropdown;
