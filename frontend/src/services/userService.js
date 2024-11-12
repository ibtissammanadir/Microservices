// src/services/userService.js
import axios from 'axios';

const USER_SERVICE_URL = 'http://localhost:8081/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(USER_SERVICE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const createUser = async (user) => {
  try {
    const response = await axios.post(USER_SERVICE_URL , user);
    return response.data
  }catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}