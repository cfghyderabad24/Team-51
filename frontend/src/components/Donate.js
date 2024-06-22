// src/components/Donate.js
import React, { useState } from 'react';
import './Donate.css';

const Donate = ({ products, students, handleDonate }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDonate(selectedProduct, selectedStudent);
  };

  return (
    <div className="donate-container">
      <h2>Donate Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select Product:
            <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
              <option value="">--Select Product--</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Select Student:
            <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
              <option value="">--Select Student--</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>{student.name}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
