import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-white">
            <Link className="text-2xl font-bold" to="/">Home</Link>
            <Link
              className={`ml-6 text-lg ${location.pathname === '/events' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              to="/events"
            >
              Create Event
            </Link>
            <Link
              className={`ml-6 text-lg ${location.pathname === '/my-events' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              to="/my-events"
            >
              My Events
            </Link>
          </div>
          <div className="flex items-center"> 
            <FaSearch className="text-gray-500 mr-2" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:bg-gray-700 focus:text-white"
              />
            </div>
            <Link className="ml-6 text-lg text-gray-300 hover:text-white" to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
