import React from 'react';
class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onFilterSelectChange(event);
  };

  render() {
    const { name, label, items } = this.props;

    return (
      <>
        <label htmlFor={name} style={{ marginRight: 10 }}>
          {label}
        </label>
        <select
          value={this.state.term}
          name={name}
          id={tname}
          onChange={this.onSelectChange}
          style={{ marginRight: 20 }}
        >
          {this.props.items.map((item) => {
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
