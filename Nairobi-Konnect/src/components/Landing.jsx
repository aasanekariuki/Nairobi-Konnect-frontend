// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import './Landing.css'; 

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to NairobiKonnect where you will be able to explore the greatness of nairobi</h1>
                    <p className="hero-description">
                        NairobiKonnect is a platform that allows users to explore the greatness of Nairobi. Whereby a user can book a bus seat and buy from the various local stalls
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
                            <h3 className="service-title">Booking Buses</h3>
                            <p className="service-description">
                                A user is able to book a bus for the route they would want
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-title">Driver </h3>
                            <p className="service-description">
                                A driver can register there car and and work 
                            </p>
                        </div>
                        <div className="service-card">
                            <h3 className="service-title">Buying</h3>
                            <p className="service-description">
                                A user can shop from local stores with an effective payment method
                            </p>
                        </div>

                        <div className="service-card">
                            <h3 className="service-title">BusinessPerson</h3>
                            <p className="service-description">
                                A business person can sell their products to the users
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
