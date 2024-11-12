// frontend/src/components/OrderList.js
import React, { useEffect, useState } from 'react';
import { getOrdersByUserId } from '../services/orderService';
import '../styles/OrderList.css';

const OrderList = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrdersByUserId(userId);
      setOrders(data);
    };
    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div>
      <h2>Commandes de l'utilisateur</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.product} - Quantités : {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
