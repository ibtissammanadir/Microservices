// frontend/src/services/orderService.js
import axios from 'axios';

const ORDER_SERVICE_URL = 'http://localhost:8080/orders';

export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const createOrder = async (order) => {
  try {
    const response = await axios.post(ORDER_SERVICE_URL, order);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
