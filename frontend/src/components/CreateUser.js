// src/components/CreateUser.js
import React, { useState } from 'react';
import { createUser } from '../services/userService';

const CreateUser = ({ onUserCreated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    setError(null); // Réinitialise les erreurs à chaque nouvelle soumission

    try {
      const newUser = { name, email };
      const createdUser = await createUser(newUser); // Appelle l'API pour créer l'utilisateur
      onUserCreated(createdUser); // Appelle le callback pour informer le parent
      setName(''); // Réinitialise le champ nom
      setEmail(''); // Réinitialise le champ email
    } catch (error) {
      setError("Une erreur est survenue lors de la création de l'utilisateur.");
    }
  };

  return (
    <div>
      <h2>Créer un nouvel utilisateur</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Créer Utilisateur</button>
      </form>
    </div>
  );
};

export default CreateUser;
