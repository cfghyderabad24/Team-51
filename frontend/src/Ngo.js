
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NgosPage from './NgosPage';
import FundingPage from './FundingPage';
import NgoMain from './NgoMain';

const Ngo = () => {
  return (
    <Router>
      <NgoMain/>
      <Routes>
        <Route path="/" element={<NgosPage />} />
        <Route path="/funding" element={<FundingPage />} />
      </Routes>
    </Router>
  );
}

export default Ngo;
