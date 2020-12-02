import React from 'react';

const FormSelect = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        name={props.name}
        id={props.name}
        onChange={props.onFormSelectChange}
      >
        {props.items.map((item) => {
          return (
            <option value={item.} key={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default FormSelect;
