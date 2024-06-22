import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../newsletter/Newsletter.css';

const NewsLetter = () => {
  const navigate = useNavigate();

  const handleCheckUpdates = () => {
    navigate('/update'); // Replace '/updates' with the actual path you want to navigate to
  };

  return (
    <div className='newsletter'>
      <button className='btn btn-success' onClick={handleCheckUpdates}>
        Check for Latest Updates
      </button>
      <h1>Get Exclusive Latest Updates On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
