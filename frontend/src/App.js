import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsLetter from './components/newsletter/Newsletter';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Update from './components/newsletter/Update';
import PrincipalLayout from './components/pricipal/PrincipalLayout';
import MyProfile from './components/pricipal/MyProfile';
import Training from './components/pricipal/Training';
import Product from './components/pricipal/Product';
import DonationForm from './components/pricipal/DonationFormgovt';
import GovernmentLayout from './components/govt/GovernmentLayout';
import DonationFormgovt from './components/pricipal/DonationFormgovt';
import ProductGovt from './components/govt/ProductGovt';

import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/update" element={<Update />} />
    
        <Route path="/principal" element={<PrincipalLayout />}>
          <Route path="" element={<MyProfile />} />
          <Route path="product" element={<Product />} />
          <Route path="training" element={<Training />} />
          <Route path='donation' element={<DonationForm/>}/>
        </Route>
        <Route path="/government" element={<GovernmentLayout />}>
          {/* <Route path="achievements" element={<Achievements />} /> */}
          <Route path="" element={<Product />} />
          <Route path="donationgovt" element={<DonationFormgovt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
