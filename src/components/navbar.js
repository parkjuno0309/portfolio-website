import React, { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        if (!isMobile) return; // Prevents toggleMenu in non-mobile views

        setIsMenuOpen((prev) => {
            if (!prev) {
                document.body.style.overflow = "hidden";
            } else {
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
