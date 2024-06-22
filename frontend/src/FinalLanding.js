// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/LandingDonor';
import LandingProducts from './components/LandingProducts'

import LandingDonor from './pages/LandingDonor';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPasssword from './components/Auth/ForgotPassword';

const FinalLanding = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/landingdonor" element={<LandingDonor/>} /> 
        <Route path="/landingproducts" element={<LandingProducts/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path='/signup' element ={<Signup/>}>/></Route> */}
      </Routes>
    </Router>
  );
};

export default FinalLanding;
