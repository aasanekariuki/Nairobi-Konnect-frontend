import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-brand">NairobiKonnect</a>
                <ul className="navbar-menu">
                    <li><a href="#home" onClick={() => handleNavClick('home')} className="navbar-item">Home</a></li>
                    <li><a href="#services" onClick={() => handleNavClick('services')} className="navbar-item">Services</a></li>
                    <li><a href="#contact" onClick={() => handleNavClick('contact')} className="navbar-item">Contact</a></li>
                    <li><a href="#signup" onClick={() => handleNavClick('signup')} className="navbar-item">Signup</a></li>
                    <li><a href="#login" onClick={() => handleNavClick('login')} className="navbar-item">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
