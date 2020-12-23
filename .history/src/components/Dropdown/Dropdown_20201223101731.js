import React from 'react';
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onSelectChange(event);
  };

  render() {

    const {
      auth,
      auth: { token },
      attraction: { id, url_name, name, image_url, average_rating }
    } = this.props;
    return (
      <div>
        <label htmlFor="forces">Please select a force:</label>
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
