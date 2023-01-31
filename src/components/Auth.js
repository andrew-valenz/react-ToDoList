import React from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { authUser } from '../services/auth.js';
import { useUser } from './context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/tasks" />;
  }

  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth box">
      <NavLink to="/auth/sign-in">Sign In</NavLink>
      <NavLink to="/auth/sign-up">Sign Up</NavLink>
      <form onSubmit={submitAuth}>
        <label>Email</label>
        <input
          type="email"
          placeholder="name@exampl.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
