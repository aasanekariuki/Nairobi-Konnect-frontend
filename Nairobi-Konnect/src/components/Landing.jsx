import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Landing.css';

const LandingPage = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // List of background images
    const images = [
        'url(https://i.ytimg.com/vi/ofzQqJNEYBk/maxresdefault.jpg)',
        'url(https://img.freepik.com/premium-photo/nairobi-city-county-kenyas-capital-cityscapes-skyline-skyscrapers-highrise-buildings-architecture_257688-277.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid)',
        'url(https://www.voyagekenya.fr/cdn/ke-public/nairobi_centre_ville.jpg)'
    ];

    useEffect(() => {
        // Change the background image every 10 seconds
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);


    return (
        <div className="landing-page" style={{ backgroundImage: images[currentImage] }}>
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
