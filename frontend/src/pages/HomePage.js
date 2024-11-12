// frontend/src/pages/HomePage.js
import React, { useState } from 'react';
import UserList from '../components/UserList';
import OrderList from '../components/OrderList';
import CreateOrder from '../components/CreateOrder';
import CreateUser from '../components/CreateUser';


const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);


  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };
  
  const handleUserCreated = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <h1>Gestion des Utilisateurs et Commandes</h1>
      <UserList onSelectUser={handleUserSelect} />
      <CreateUser onUserCreated={handleUserCreated} />

      {selectedUser && (
        <>
          <h3>Commandes de {selectedUser.name}</h3>
          <CreateOrder userId={selectedUser.id} onOrderCreated={() => {}} />
          <OrderList userId={selectedUser.id} />

        </>
      )}
    </div>
  );
};

export default HomePage;
