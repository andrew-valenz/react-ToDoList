import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from './context/UserContext.js';

export default function Tasks() {
  const { user } = useUser();
  console.log('user', user);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks go here</div>;
}
