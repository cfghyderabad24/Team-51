// src/components/pricipal/PrincipalLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './PrincipalLayout.css'; // Add necessary CSS for styling

const PrincipalLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/principal/profile">Profile</Link></li>
          <li><Link to="/principal/product">Product</Link></li>
          <li><Link to="/principal/training">Training</Link></li>
          <li><Link to="/principal/donation">Donation</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PrincipalLayout;
