import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';
function Navbar() {
  const { logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem('authTokens');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* <Link className="navbar-brand" to="/">
          <img src="/logo.svg" alt="EventBrite" style={{ width: '120px', padding: '6px' }} />
        </Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">Home</Link>
            </li>
            {token === null ?
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
              :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">Create Event</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-events">My Events</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={logoutUser}>Logout</button>
                </li>
              </>
            }
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit"><FaSearch /></button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
