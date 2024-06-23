import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import './DonationForm.css'; // Import the CSS file

const DonationForm = () => {
  const [amount, setAmount] = useState(10); // Default donation amount
  const [donorName, setDonorName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState(''); // State for email

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

  // Handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle donation completion
  const handleDonationSuccess = (details, data) => {
    alert('Donation successful! Thank you for your support.');
    console.log(details, data); // You can further process the donation details here
  };

  // Function to handle PAN card verification or related functionality
  const handlePANVerification = () => {
    alert('PAN Card verification initiated.'); // Placeholder action
    // Implement your PAN card verification logic here
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
     {/* Add email input field */}
      
      <div className="paypal-button-container">
        <PayPalButton
          amount={amount}
          onSuccess={handleDonationSuccess}
          options={{
            clientId: '', // Replace with your dummy PayPal client ID
          }}
        />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
        <button onClick={handlePANVerification}>Verify PAN Card</button> {/* Placeholder button */}
      </div>
    </div>
  );
};

export default DonationForm;
