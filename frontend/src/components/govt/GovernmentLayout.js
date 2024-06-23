import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../pricipal/PrincipalLayout.css'

const GovernmentLayout = () => {
  return (
    <div>
      <nav className="navbar mt-0">
        <ul>
          <li><Link to="">Products</Link></li>
          <li><Link to="donationgovt">Donation</Link></li>
          <li><Link to = "/government/favourates">Favourites</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default GovernmentLayout;
