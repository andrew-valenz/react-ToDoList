import { NavLink } from 'react-router-dom';

export default function Auth() {
  return (
    <>
      <div className="auth box">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
        <label>Email</label>
        <input type="email" placeholder="name@example, com" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div className="button">
        <button>Submit</button>
      </div>
    </>
  );
}
