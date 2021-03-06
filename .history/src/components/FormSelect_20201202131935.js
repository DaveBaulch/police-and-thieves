import React from 'react';
class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onFormSelectChange(this.state.term);
  };

  render() {
    return (
      <>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
          value={this.state.term}
          name={this.props.name}
          id={this.props.name}
          onChange={this.onSelectChange}
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
