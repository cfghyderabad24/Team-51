import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function Product() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleFavoriteClick = (product) => {
    if (!favorites.some((fav) => fav.title === product.title)) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };
  

  const products = [
    { title: 'Pro Game 1', description: 'A first-of-its-kind Kit that allows a child to start learning to Program WITHOUT a Computer. The kit, for which a Patent has been filed for, includes physical blocks and an Android App. The output of the child’s creativity can be viewed by scanning the' },
    { title: 'Pro Game 2', description: 'A first-of-its-kind Kit that allows a child to start learning to Program WITHOUT a Computer. The kit, for which a Patent has been filed for, includes physical blocks and an Android App. The output of the child’s creativity can be viewed by scanning the' },
    { title: 'Pro Game 3', description: 'A first-of-its-kind Kit that allows a child to start learning to Program WITHOUT a Computer. The kit, for which a Patent has been filed for, includes physical blocks and an Android App. The output of the child’s creativity can be viewed by scanning the' },
    { title: 'Pro Game 4', description: 'A first-of-its-kind Kit that allows a child to start learning to Program WITHOUT a Computer. The kit, for which a Patent has been filed for, includes physical blocks and an Android App. The output of the child’s creativity can be viewed by scanning the' },
    { title: 'Pro Game 5', description: 'A first-of-its-kind Kit that allows a child to start learning to Program WITHOUT a Computer. The kit, for which a Patent has been filed for, includes physical blocks and an Android App. The output of the child’s creativity can be viewed by scanning the' },
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
