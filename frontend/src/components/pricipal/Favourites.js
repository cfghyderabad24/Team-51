import React from 'react';
import { useLocation } from 'react-router-dom';

function Favorites() {
  const { state } = useLocation();

  return (
    <div>
      <h2>My Favorites</h2>
      {state?.favorites && state.favorites.length > 0 ? (
        <div className="card-container">
          {state.favorites.map((product, index) => (
            <div key={index} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites selected.</p>
      )}
    </div>
  );
}

export default Favorites;
