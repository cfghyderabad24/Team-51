// src/pages/DonatePage.js
import React, { useState } from 'react';
import Donate from './components/Donate';

const FundingPage = () => {
  const products = [
    { id: 1, name: 'Coding Toy' },
    { id: 2, name: 'Hybrid Toy' },
    { id: 3, name: 'Device for disabilities' },
  ];

  const students = [
    { id: 1, name: 'ram' },
    { id: 2, name: 'nikhil' },
    { id: 3, name: 'lakshitha' },
  ];

  const handleDonate = (productId, studentId) => {
    // Handle the donation logic (e.g., API call)
    console.log(`Donating product ${productId} to student ${studentId}`);
    alert(`Product ${productId} donated to student ${studentId}`);
  };

  return <Donate products={products} students={students} handleDonate={handleDonate} />;
};

export default FundingPage;
