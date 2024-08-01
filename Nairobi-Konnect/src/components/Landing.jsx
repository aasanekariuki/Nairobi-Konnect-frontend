// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import './Landing.css'; // Ensure correct path

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Future-Ready Platform</h1>
                    <p className="hero-description">
                        Innovating solutions with cutting-edge technology to drive your success.
                    </p>
                    <button
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        className="cta-button"
                    >
                        Discover More
                    </button>
                </div>
            </header>

            <section id="services" className="services">
                <div className="services-container">
                    <h2 className="services-title">Our Services</h2>
                    <div className="services-list">
                        <div className="service-card">
                            <h3 className="service-title">Service One</h3>
                            <p className="service-description">
                                Advanced solutions tailored to your business needs.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-title">Service Two</h3>
                            <p className="service-description">
                                Innovative technology to streamline your operations.
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-title">Service Three</h3>
                            <p className="service-description">
                                Comprehensive support and guidance for your success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="contact-container">
                    <h2 className="contact-title">Get in Touch</h2>
                    <form className="contact-form">
                        <label htmlFor="name" className="contact-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="contact-input"
                            placeholder="Your Name"
                        />
                        <label htmlFor="email" className="contact-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="contact-input"
                            placeholder="you@example.com"
                        />
                        <label htmlFor="message" className="contact-label">Message</label>
                        <textarea
                            id="message"
                            className="contact-textarea"
                            placeholder="Your Message"
                        />
                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
