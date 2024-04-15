import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Navbar from './components/navbar';

// Route-specific components
import Home from './components/routes/Home';
import Experience from './components/routes/Experience';
import Projects from './components/routes/Projects';

// Styles
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
