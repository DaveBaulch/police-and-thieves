const Spinner = ({message}) => {
  return (
    <div className="ui active dimmer">
      <div className="ui ig text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
