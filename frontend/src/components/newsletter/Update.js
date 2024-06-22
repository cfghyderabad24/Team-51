import React from 'react';
import './Update.css';

const Update = () => {
  const updates = [
    {
      title: "Update 1",
      description: "Description for update 1."
    },
    {
      title: "Update 2",
      description: "Description for update 2."
    },
    // Add more updates as needed
  ];

  return (
    <div className="updates-container">
      {updates.map((update, index) => (
        <div key={index} className="update-box">
          <h2 className="update-title">{update.title}</h2>
          <p className="update-description">{update.description}</p>
        </div> 
      ))}
    </div>
  );
};

export default Update;
