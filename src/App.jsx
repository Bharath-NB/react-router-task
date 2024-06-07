import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Footer from './components/Footer'; 

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(!loggedIn);
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-left">
            <img src="https://asset.brandfetch.io/id3BHBKuok/id86bsKcFH.jpeg" alt="Logo" className="logo" />
            <NavLink to="/" className="nav-link" exact>Blog</NavLink>
          </div>
          <div className="navbar-middle">
            <input 
              type="text" 
              placeholder="What do you want to read?" 
              className="search-bar" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
          <div className="navbar-right">
            <button onClick={handleLogout} className="logout-button">
              {loggedIn ? 'Logout' : 'Signup'}
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} exact />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
