import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

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
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
