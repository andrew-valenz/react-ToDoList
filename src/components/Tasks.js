import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from './context/UserContext.js';

export default function Tasks() {
  const { user } = useUser;
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <p>Tasks go here</p>;
}
