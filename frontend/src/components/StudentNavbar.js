// src/components/StudentNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const StudentNavbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/students/games" style={{ margin: '0 10px' }}>Games</Link>
      <Link to="/students/leaderboards" style={{ margin: '0 10px' }}>Leaderboards</Link>
      <Link to="/students/courses" style={{ margin: '0 10px' }}>Courses</Link>
      <Link to="/students/studentproducts" style={{ margin: '0 10px' }}>Products</Link>
    </nav>
  );
};

export default StudentNavbar;
