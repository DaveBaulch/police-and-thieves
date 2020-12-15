import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    // if (event.target.value === '') {
    //   return;
    // }
    this.setState({ term: event.target.value });
    this.props.onSelectChange(event);
  };

  render() {
    return (
      <div>
        <label htmlFor="forces">Choose a force:</label>
        <br />
        <select
          name="forces"
          id="forces"
          value={this.state.term}
          onChange={this.onSelectChange}
        >
          <option value="">Please select...</option>
          {this.props.forces.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default Dropdown;
