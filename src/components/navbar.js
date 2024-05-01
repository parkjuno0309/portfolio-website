import React from 'react';
import '../styles/navbar.css';
import logo from '../images/logo-large.png';
import { NavLink, Link } from 'react-router-dom';
import ResumePDF from '../docs/JunhoPark_Resume.pdf';

// Resume Button Component
const ResumeButton = () => {
  return (
    <div className="resume-button">
      <a href={ResumePDF} target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
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
      <ResumeButton />
    </nav>
  );
};

export default Navbar;
