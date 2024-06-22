import React from 'react';
import './Update.css';

const Updates = () => {
  const updates = [
    {
      title: "Latest Update 1",
      description: "This is a long description for update 1. "
    },
    {
      title: "Latest Update 2",
      description: "This is a long description for update 2. "
    },
    // Add more updates as needed
  ];

  return (
    <div className="updates-container mb-5 mt-9">
      {updates.map((update, index) => (
        <div key={index} className="update-box">
          <h2 className="update-title">Latest Updates</h2>
          <p className="update-description">{update.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Updates;
