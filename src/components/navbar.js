import React from 'react';
import '../styles/navbar.css';
import logo from '../images/logo-large.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <NavLink to="/" className="desktopMenuListItem">
          Home
        </NavLink>
        <NavLink to="/experience" className="desktopMenuListItem">
          Experience
        </NavLink>
        <NavLink to="/projects" className="desktopMenuListItem">
          Projects
        </NavLink>
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
