import React from 'react';
import { useUser } from '../components/context/UserContext.js';
import { signOut } from '../services/auth.js';

export default function Header() {
  const { setUser } = useUser();
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
      <h1>Header</h1>
      <button onClick={handleLogout}>Sign-out</button>
    </header>
  );
}
