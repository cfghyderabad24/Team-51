import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2'; // Ensure correct import path
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

  // Function to send donation data to backend
  const sendDonationDataToBackend = (amount) => {
    // You can use fetch or axios to send a POST request to your backend server
    fetch('/api/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send donation data to backend');
      }
      return response.json();
    })
    .then(data => {
      console.log('Donation data sent to backend:', data);
    })
    .catch(error => {
      console.error('Error sending donation data to backend:', error);
    });
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
            clientId: 'YOUR_PAYPAL_CLIENT_ID_HERE', // Replace with your PayPal client ID
          }}
        />
      </div>
    </div>
  );
};

export default DonationForm;
