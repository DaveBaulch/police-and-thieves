// import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const forces = props.forces;

  return (
    <>
      <label htmlFor="forces">Choose a force:</label>
      <select name="forces" id="forces">
        {options.map((item) => {
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

// Dropdown.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string
// };

export default Dropdown;
