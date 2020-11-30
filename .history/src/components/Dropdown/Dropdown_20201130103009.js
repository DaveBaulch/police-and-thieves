const Dropdown = (props) => {
  const forces = props.forces;

  onSelectChange = (event) => {
    console.log('Changed');
    // this.setState({ selectedForce: video });
  };

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
