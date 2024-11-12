// frontend/src/components/CreateOrder.js
import React, { useState } from 'react';
import { createOrder } from '../services/orderService';
import '../styles/CreateOrder.css';

const CreateOrder = ({ userId, onOrderCreated }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { userId, product, quantity };
    await createOrder(order);
    onOrderCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer une commande</h2>
      <div>
        <label>Produit :</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantité :</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit">Créer la commande</button>
    </form>
  );
};

export default CreateOrder;
