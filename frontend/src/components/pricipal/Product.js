import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function Product() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleFavoriteClick = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const products = [
    { title: 'Pro Game 1', description: 'Description for Material 1.' },
    { title: 'Pro Game 2', description: 'Description for Material 2.' },
    { title: 'Pro Game 3', description: 'Description for Material 3.' },
    { title: 'Pro Game 4', description: 'Description for Material 4.' },
    { title: 'Pro Game 5', description: 'Description for Material 5.' },
  ];

  const navigateToFavorites = () => {
    navigate('/favorites', { state: { favorites } });
  };

  return (
    <div>
      <div className="card-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button
              className={`btn ${favorites.includes(product) ? 'btn-favorite' : ''}`}
              onClick={() => handleFavoriteClick(product)}
            >
              {favorites.includes(product) ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
            <button className='btn btn-success mt-5'>Know More</button>
          </div>
        ))}
      </div>
      {/* <button onClick={navigateToFavorites} className="btn btn-primary mt-5">Go to Favorites</button> */}
    </div>
  );
}

export default Product;
