import React from 'react';
import { useLocation } from 'react-router-dom';

function Favorites() {
  const location = useLocation();
  const favorites = location.state?.favorites || [];

  return (
    <div>
      <h3>Favorites</h3>
      <div className="card-container">
        {favorites.map((product, index) => (
          <div key={index} className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
