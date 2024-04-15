import React from 'react';

// SVGs as React components
import userImg from '../../images/user.png';
import { ReactComponent as GitHubIcon } from '../../images/github.svg';
import { ReactComponent as LinkedInIcon } from '../../images/linkedin.svg';
import { ReactComponent as GmailIcon } from '../../images/gmail.svg';

// Styles
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={userImg} alt="User" className="bg" />
      <div className="info-container">
        <div className="background-info">
          <h1>Hello, World!</h1>
          <br />
          <p>
            My name is Junho Park, and I am an undergraduate student majoring in
            Computer Science with a minor in Data Science at Northwestern
            University in Evanston, IL.
            <br />
            <br />
            I am a passionate developer, curious engineer, and creative designer
            born in New York and raised in Seoul, South Korea. I love traveling
            and exploring diverse cultures. Currently, I plan to pursue a career
            in software development.
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
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/junopark0309/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:youremail@example.com" className="icon-link">
            <GmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
