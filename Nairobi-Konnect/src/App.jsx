import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bus from './components/Bus';
import Driver from './components/Driver';
import Landing from './components/Landing';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import SignUp from './components/SignUp';
import Stalls from './components/Stalls';
import User from './components/User';

function App() {
  return (
    <Router>
     {/* Navbar will be displayed on every page */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Default route */}
          <Route path="/bus" element={<Bus />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;s