// src/components/Navbar.js
import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './LandingNavbar.css';

const LandingNavbar = () => {
    const navigate = useNavigate();
  return (
    

    <nav className="navbar">
      <div className="navbar-brand">Next Skill 360</div>
      <div className="navbar-links">
         <Link to="/landingdonor" className="nav-link">Donate</Link> 
        <Link to="/landingproducts" className="nav-link">Products</Link>
        <button className="login-button" onClick={() => navigate('/login')}>
        Login
      </button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
