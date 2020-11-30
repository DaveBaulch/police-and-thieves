import { Component } from 'react';
import Dropdown from '../Dropdown';

const Forces = ({ forces }) => {
  const renderedList = forces.map((force) => {
    return (
      <Dropdown
        key={force.id}
        onVideoSelect={onVideoSelect}
        force={force}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Forces;
