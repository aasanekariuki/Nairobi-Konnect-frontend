import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Landing.css'; 

const LandingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Normally handle form submission here, e.g., send data to a server
        console.log('Form Data:', formData);

        // Simulate a successful form submission
        setIsSubmitted(true);

        // Reset form data
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // Clear the notification after a few seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    // Effect to add and remove the 'show' class for animation
    useEffect(() => {
        if (isSubmitted) {
            const messageElement = document.querySelector('.submission-message');
            messageElement.classList.add('show');
            const timer = setTimeout(() => messageElement.classList.remove('show'), 5000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    return (
        <div className="landing-page">
            <Navbar />
            <header id="home" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to NairobiKonnect where you will be able to explore the greatness of Nairobi</h1>
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
                            <h3 className="service-title">Driver</h3>
                            <p className="service-description">
                                A driver can register their car and work 
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="contact-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="contact-input"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email" className="contact-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="contact-input"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="message" className="contact-label">Message</label>
                        <textarea
                            id="message"
                            className="contact-textarea"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send Message
                        </button>
                    </form>
                    <p className={`submission-message ${isSubmitted ? 'show' : ''}`}>
                        Your message has been successfully sent!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
