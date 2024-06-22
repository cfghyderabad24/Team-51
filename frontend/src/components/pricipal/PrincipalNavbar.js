import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PrincipalNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Jaya School</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">MyProfile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/training">Training</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PrincipalNavbar;
