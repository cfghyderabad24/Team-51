import React, { useState } from 'react';
import './Product.css';

function Product() {
  const [favorites, setFavorites] = useState({});

  const handleFavoriteClick = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  const products = [
    { title: 'Pro Game 1', description: 'Description for Material 1.' },
    { title: 'Pro Game 1', description: 'Description for Material 2.' },
    { title: 'Pro Game 1', description: 'Description for Material 3.' },
    { title: 'Pro Game 1', description: 'Description for Material 4.' },
    { title: 'Pro Game 1', description: 'Description for Material 5.' },
  ];
  
  return (
    <div>
      <div className="card-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button
              className={`btn ${favorites[index] ? 'btn-favorite' : ''}`}
              onClick={() => handleFavoriteClick(index)}
            >
              {favorites[index] ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
            <button className='btn btn-success mt-5'>Know MOre</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
