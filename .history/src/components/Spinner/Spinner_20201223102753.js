const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui ig text loader">{message}</div>
    </div>
  );
};

export default Spinner;
