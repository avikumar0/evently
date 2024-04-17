import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Loginpage() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

    console.log(email);
    console.log(password);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome back 👋</h2>
          <p className="text-gray-500 mt-2">Sign into your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="email" id="email" className="form-input w-full" name="email" placeholder="Email address" />
          </div>
          <div className="mb-4">
            <input type="password" id="password" className="form-input w-full" name="password" placeholder="Password" />
          </div>
          <div className="mb-6 text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300" type="submit">Login</button>
          </div>
          <p className="text-sm text-center text-gray-500">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
          <p className="text-sm text-center text-gray-500 mt-2">Don't have an account? <Link to="/register" className="text-blue-500">Register Now</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
