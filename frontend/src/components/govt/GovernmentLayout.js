import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// Import the CSS file for the navbar styling

const GovernmentLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="productgovt">Products</Link></li>
          <li><Link to="donationgovt">Donation</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default GovernmentLayout;
