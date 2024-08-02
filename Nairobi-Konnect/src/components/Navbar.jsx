import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand" onClick={scrollToTop}>
                    NairobiKonnect
                </Link>
                <ul className="navbar-menu">
                    <li><a href="#home" className="navbar-item" onClick={scrollToTop}>Home</a></li>
                    <li><a href="#services" className="navbar-item" onClick={() => handleNavClick('services')}>Services</a></li>
                    <li><a href="#contact" className="navbar-item" onClick={() => handleNavClick('contact')}>Contact</a></li>
                    <li><Link to="/signup" className="navbar-item">Signup</Link></li>
                    <li><Link to="/login" className="navbar-item">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
