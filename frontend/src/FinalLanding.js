// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/LandingDonor';
import LandingProducts from './components/LandingProducts'
import Login from './pages/Login';
import LandingDonor from './pages/LandingDonor';

const FinalLanding = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/landingdonor" element={<LandingDonor/>} /> 
        <Route path="/landingproducts" element={<LandingProducts/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default FinalLanding;
