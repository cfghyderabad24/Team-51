import React from 'react';
import { Link } from 'react-router-dom';
import './PrincipalNavbar.css'

const PrincipalNavbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">MyProfile</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/training">Training</Link></li>
      </ul>
    </nav>
  );
};


export default PrincipalNavbar;
