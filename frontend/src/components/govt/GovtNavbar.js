import React from 'react';
import { Link } from 'react-router-dom';
import './GovtNavbar.css'; // Make sure the path is correct

function GovtNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/govt/achievements" className="navbar-link">Achievements</Link>
        </li>
        <li className="navbar-item">
          <Link to="/govt/products" className="navbar-link">Products</Link>
        </li>
        <li className="navbar-item">
          <Link to="/govt/donation" className="navbar-link">Donation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default GovtNavbar;
