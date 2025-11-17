import React from 'react';
import logo from '../images/keep_notes.webp';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="70" />
      <h1>Keep Note</h1>
    </div>
  );
};

export default Header;
