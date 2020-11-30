const Dropdown = (props) => {
  const forces = props.forces;

  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces">
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
