import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">NairobiKonnect</Link>
                <ul className="navbar-menu">
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="#services" className="navbar-item" onClick={() => handleNavClick('services')}>Services</Link></li>
                    <li><Link to="#contact" className="navbar-item" onClick={() => handleNavClick('contact')}>Contact</Link></li>
                    <li><Link to="/signup" className="navbar-item">Signup</Link></li>
                    <li><Link to="/login" className="navbar-item">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
