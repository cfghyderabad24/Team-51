import React from 'react'
import './AdminDashboard.css'
import { FaPencil } from "react-icons/fa6";
import Modal from './Modal';
import { useState } from 'react';

const AdminDashboard1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const productsData = [
        {
          id: 1,
          name: 'Product 1',
          imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
          price: 100,
        },
        {
          id: 2,
          name: 'Product 2',
          imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
          price: 200,
        },
        {
            id: 3,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
          {
            id: 4,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
          {
            id: 5,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
          {
            id: 6,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
          {
            id: 7,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
          {
            id: 8,
            name: 'Product 2',
            imageUrl: 'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1-300x300.png',
            price: 200,
          },
        // Add more product data as needed
      ];
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="product-cards">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <div className="button-container">
              <button className="circle-button" onClick={openModal}>
                <i className="fas fa-plus"></i> +{/* + symbol */}
              </button>
              <button className="circle-button">
                <i className="fas fa-pencil-alt"></i> <FaPencil />{/* Pencil symbol */}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Discount</h2>
        <form>
          <div>
            <label>Discount Name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Discount Description</label>
            <input type="text" name="imageUrl" />
          </div>
          <div>
            <label>Discount Code</label>
            <input type="number" name="price" />
          </div>
          <button type="submit">submit discount</button>
        </form>
      </Modal>
    </div>
  )
}

export default AdminDashboard1