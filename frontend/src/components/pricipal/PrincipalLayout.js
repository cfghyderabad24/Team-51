import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './PrincipalLayout.css';

const PrincipalLayout = () => {
  return (
    <div>
      <nav className="navbar">
        <ul> 
          <li><Link to="/principal/">MyProfile</Link></li>
          <li><Link to="/principal/product">Product</Link></li>
          <li><Link to="/principal/training">Training</Link></li>
          <li><Link to="/principal/donation">Donation</Link></li>
          <li><Link to = "/principal/favourates">Favourates</Link></li>
        </ul> 
      </nav>  
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default PrincipalLayout;
