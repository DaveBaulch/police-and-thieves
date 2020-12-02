import React from 'react';

const FormSelect = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{ props.la}</label>
      <select name={props.name} id={props.name} onChange={props.onSelectChange}>
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
export default FormSelect;
