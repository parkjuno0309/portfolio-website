import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../images/logo-large.png";
import { NavLink, Link } from "react-router-dom";
import ResumePDF from "../docs/JunhoPark_Resume.pdf";

// Hamburger Menu Component
const Hamburger = ({ isActive, toggle }) => {
    return (
        <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggle}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            if (!prev) {
                // Menu is going to be opened
                document.body.style.overflow = "hidden";
            } else {
                // Menu is going to be closed
                document.body.style.overflow = "auto";
            }
            return !prev;
        });
    };
    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <Hamburger isActive={isMenuOpen} toggle={toggleMenu} />{" "}
            {/* Corrected isActive to reflect actual state */}
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <NavLink
                    to="/"
                    exact
                    className="desktopMenuListItem"
                    onClick={toggleMenu}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/experience"
                    className="desktopMenuListItem"
                    onClick={toggleMenu}
                >
                    Experience
                </NavLink>
                <NavLink
                    to="/projects"
                    className="desktopMenuListItem"
                    onClick={toggleMenu}
                >
                    Projects
                </NavLink>
                <ResumeButton />
            </div>
        </nav>
    );
};

export default Navbar;
