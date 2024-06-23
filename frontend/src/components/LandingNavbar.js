import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingNavbar.css';

const LandingNavbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="navbar-brand text-light">Next Skill 360</div>
            <div className="navbar-links">
                <a href="https://t.me/nextskills360_bot">Chat bot</a>
                <Link to="/landingdonor" className="nav-link">Donate</Link>
                <Link to="/landingproducts" className="nav-link">Products</Link>
                <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                <button className="games-button" onClick={() => navigate('/games')}>Games</button> {/* New button */}
                <button className='btn btn-success' onClick={() => navigate('/newsletter')}>NewsLetter</button>
            </div>
        </nav>
    );
};

export default LandingNavbar;
