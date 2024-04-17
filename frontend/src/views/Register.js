import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Registerpage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <section className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to <b>Evently👋</b></h2>
          <p className="text-gray-500 mt-2">Sign Up</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="form-input w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="form-input w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="form-input w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password2"
              className="form-input w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="mb-6 text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300" type="submit">Register</button>
          </div>
          <p className="text-sm text-center text-gray-500">
            Already have an account? <Link to="/login" className="text-blue-500">Login Now</Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Registerpage;
