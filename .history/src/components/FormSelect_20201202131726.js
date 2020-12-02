import React from 'react';
class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  state = { term: '' };

  render() {
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
  }
}
export default FormSelect;
