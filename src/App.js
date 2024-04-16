import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import Project from './components/Project';
import ProjectsMenu from './components/ProjectsMenu';

// Route-specific components
import Home from './components/routes/Home';
import Experience from './components/routes/Experience';
import Projects from './components/routes/Projects';

// Styles
import './styles/App.css';
import './styles/animations.css';

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

    // Hash change event listener
    const handleHashChange = () => {
      const { hash, pathname } = window.location;

      // If the URL is not the root, redirect to the root
      if (pathname !== '/') {
        window.location.href = '/#' + pathname;
      }

      // Fix URL if slash exists in hash and is not the first character
      const hashSlashIndex = hash.indexOf('/');
      if (hashSlashIndex > -1 && hashSlashIndex !== 1) {
        window.location.href = '/#' + hash.slice(hashSlashIndex);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Only run on mount

  // Determine if window is narrow enough to be identified as mobile view
  useEffect(() => {
    setShowMobileView(windowWidth <= MOBILE_VIEW_THRESHOLD);
  }, [windowWidth]);
  return (
    <Router>
      <div className={`app-container${showMobileView ? ' mobile' : ''}`}>
        <div className="App">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />}>
                <Route path=":projectID" element={<Project />} />
                <Route index element={<ProjectsMenu />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
