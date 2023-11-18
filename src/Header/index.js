import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Movies Paradise</Link>
      </div>
      <div className="navbar-right">
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
          <Link to="/logout" onClick={toggleMenu}>
            Logout
          </Link>
          <Link to="/company-details" onClick={toggleMenu}>
            Company Info
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
