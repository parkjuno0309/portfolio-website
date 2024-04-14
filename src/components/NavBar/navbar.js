import React from 'react';
import './navbar.css';
import logo from '../../assets/logo-large.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Experience</Link>
        <Link className="desktopMenuListItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
