import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Index
      </Link>
      <div className="right menu">
        <Link to="/page1" className="item">
          Page 1
        </Link>
      </div>
    </div>
  );
};

export default Header;
