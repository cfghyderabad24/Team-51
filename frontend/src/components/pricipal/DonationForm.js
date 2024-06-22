// src/components/pricipal/DonationForm.js
import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import './DonationForm.css'; // Import the CSS file

const DonationForm = () => {
  const [amount, setAmount] = useState(10); // Default donation amount
  const [donorName, setDonorName] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  // Handle donation amount change
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Handle donor name change
  const handleDonorNameChange = (event) => {
    setDonorName(event.target.value);
  };

  // Handle mobile number change
  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  // Handle donation completion
  const handleDonationSuccess = (details, data) => {
    alert('Donation successful! Thank you for your support.');
    console.log(details, data); // You can further process the donation details here
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <label htmlFor="donorName">Donor Name:</label>
      <input
        type="text"
        id="donorName"
        value={donorName}
        onChange={handleDonorNameChange}
      />
      <label htmlFor="mobileNo">Mobile Number:</label>
      <input
        type="text"
        id="mobileNo"
        value={mobileNo}
        onChange={handleMobileNoChange}
      />
      <div className="paypal-button-container">
        <PayPalButton
          amount={amount}
          onSuccess={handleDonationSuccess}
          options={{
            clientId: '', // Replace with your dummy PayPal client ID
          }}
        />
      </div>
    </div>
  );
};

export default DonationForm;
