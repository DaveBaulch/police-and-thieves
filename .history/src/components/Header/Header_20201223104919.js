import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      Homepage
    </Link>
    <div className="left menu">
      <Link to="/location" className="item">
        Your location
      </Link>
    </div>
  </div>
);

export default Header;
