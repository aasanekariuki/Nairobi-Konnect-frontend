// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import './Login.css'; // Updated CSS file

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically handle the login logic (e.g., API call)
        setMessage('Login successful!'); // Replace with actual success message
    };

    return (
        <div className="login-page">
            <div className="left-bg"></div>
            <div className="right-bg"></div>
            <div className="bokeh-overlay"></div> {/* Optional overlay */}
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <p className="interactive-text">Welcome Back!</p>
                <form onSubmit={handleLogin} className="login-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                    {message && <p className="login-message">{message}</p>}
                </form>
                <div className="forgot-password">
                    <button className="forgot-password-button">Forgot Password?</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
