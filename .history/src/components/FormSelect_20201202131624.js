import React from 'react';

const FormSelect = (props) => {
  state = { term: '' };

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        value={this.state.term}
        name={props.name}
        id={props.name}
        onChange={props.onFormSelectChange}
      >
        {props.items.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default FormSelect;
