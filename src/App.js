import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import Project from './components/Project';
import ProjectsMenu from './components/ProjectsMenu';

// Routes
import Home from './components/routes/Home';
import Projects from './components/routes/Projects';
import Experience from './components/routes/Experience';

// Styles
import './styles/animations.css';
import './styles/App.css';

// The maximum number of pixels the window must be to be determined as mobile view
const MOBILE_VIEW_THRESHOLD = 890;

const App = () => {
  // Determine if the window is mobile view
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMobileView, setShowMobileView] = useState(null);

  // Set up event listeners
  useEffect(() => {
    // Blur active element on click
    const handleClick = () => document.activeElement.blur();
    document.addEventListener('click', handleClick);

    // Window resize event listener
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Only run on mount

  // Determine if window is narrow enough to be identified as mobile view
  useEffect(() => {
    setShowMobileView(windowWidth <= MOBILE_VIEW_THRESHOLD);
  }, [windowWidth]);

  return (
    <HashRouter>
      <div className={`app-container${showMobileView ? ' mobile' : ''}`}>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />}>
              <Route index element={<ProjectsMenu />} />
              <Route path=":projectID" element={<Project />} />
            </Route>
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
