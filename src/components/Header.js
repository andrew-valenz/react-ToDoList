import React from 'react';
import { useUser } from '../components/context/UserContext.js';
import { signOut } from '../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      {user && (
        <nav>
          <h1>To Do List Ap!</h1>
          <p>Hello {user.email}</p>
          <button onClick={handleLogout}>Sign-out</button>
        </nav>
      )}
    </header>
  );
}
