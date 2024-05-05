import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userImg from "../../images/user.png";
import GitHubIcon from "../../images/github.svg";
import LinkedInIcon from "../../images/linkedin.svg";
import GmailIcon from "../../images/gmail.svg";
import "../../styles/Home.css";

const roles = ["Coder", "Engineer", "Developer"];

const Home = () => {
    const location = useLocation();
    const [roleIndex, setRoleIndex] = useState(0);
    const [role, setRole] = useState("");
    const [deleting, setDeleting] = useState(false);
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

    useEffect(() => {
        const typingDelay = 150;
        const erasingDelay = 100;
        const newRoleDelay = 2200;

        if (!deleting) {
            if (role.length < roles[roleIndex].length) {
                setTimeout(() => {
                    setRole(roles[roleIndex].substring(0, role.length + 1));
                }, typingDelay);
            } else {
                setTimeout(() => {
                    setDeleting(true);
                }, newRoleDelay);
            }
        } else {
            if (role.length > 0) {
                setTimeout(() => {
                    setRole(roles[roleIndex].substring(0, role.length - 1));
                }, erasingDelay);
            } else {
                setDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }
    }, [role, deleting, roleIndex]);

    return (
        <div className="home-container" key={location.pathname}>
            <div className="image-container">
                <img src={userImg} alt="User" className="bg" />
            </div>
            <div className="info-container">
                <div className="background-info">
                    <h1>
                        Hi, I'm Juno
                        {isMobile && <span className="br-mobile"></span>}
                        <span className="dynamic-text">{role}</span>
                    </h1>
                    <br />
                    <p>
                        My name is Junho Park, and I am an undergraduate student
                        majoring in Computer Science with a minor in Data
                        Science at Northwestern University in Evanston, IL.
                        <br />
                        <br />
                        I am a passionate developer, curious engineer, and
                        creative designer born in New York and raised in Seoul,
                        South Korea. I love traveling and exploring diverse
                        cultures. Currently, I plan to pursue a career in
                        software development.
                        <br />
                        <br />
                        Welcome to my portfolio website - feel free to explore!
                    </p>
                </div>
                <div className="social-links">
                    <a
                        href="https://github.com/parkjuno0309"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                    >
                        <GitHubIcon title="Github | Juno Park" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/junopark0309/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                    >
                        <LinkedInIcon title="LinkedIn | Juno Park" />
                    </a>
                    <a
                        href="mailto:parkjuno0309@gmail.com"
                        className="icon-link"
                    >
                        <GmailIcon title="Email | Juno Park" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
