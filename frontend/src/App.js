import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Homepage from './views/Home';
import Registerpage from './views/Register';
import Loginpage from './views/Login';
import Navbar from './views/Navbar';
import EventsForm from './views/EventsForm';
import Events from './views/Events';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<EventsForm />} />
          <Route path="/my-events" element={<Events />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
