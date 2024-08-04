import React, { useState, useEffect } from 'react';
import axios from 'axios';

const images = [
  'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg',
  'https://lh3.googleusercontent.com/UmleRgRVFO1XPWAuoIlmKTcODOx8rKKrPJksb2vejai-8SZzYpraCkLzV-57l3gZIbJ5YKd_NdSroma4kS4K0WoCqoIDTdIDgO4psV5EUtw=s750',
  'https://coolmen.africa/wp-content/uploads/2024/01/Perfume-Shop.jpg',
];

const Seller = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    available_quantity: '',
    shop_name: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/products', product);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error posting product');
    }
  };

  return (
    <div className="position-relative min-vh-100 text-white d-flex align-items-center justify-content-center p-4 main-background">
      <div className="position-absolute top-0 left-0 w-100 h-100 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image})`,
              animation: `fade ${images.length * 10}s infinite`,
              opacity: 0,
              animationDelay: `${index * (10 / images.length)}s`,
            }}
          />
        ))}
      </div>
      <div className="position-relative bg-teal text-black p-4 rounded-lg shadow w-100 max-w-md" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
        <h2 className="text-2xl font-bold mb-4">Post a New Product</h2>
        <form onSubmit={handleSubmit}>
          {[
            { name: 'name', type: 'text', label: 'Product Name' },
            { name: 'description', type: 'textarea', label: 'Description' },
            { name: 'price', type: 'number', label: 'Price' },
            { name: 'available_quantity', type: 'number', label: 'Available Quantity' },
            { name: 'shop_name', type: 'text', label: 'Shop Name' },
            { name: 'location', type: 'text', label: 'Location' }
          ].map(({ name, type, label }) => (
            <div key={name} className="mb-3">
              <label className="form-label">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  name={name}
                  value={product[name]}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={product[name]}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" className="btn">
            <strong>Post Product</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </form>
      </div>
      <style>
        {`
          .main-background {
            background-image: url('${images[0]}');
            background-size: cover;
            background-position: center;
          }

          .slideshow-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }

          @keyframes fade {
            0%, 20%, 100% { opacity: 0; }
            25%, 95% { opacity: 1; }
          }

          .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 13rem;
            overflow: hidden;
            height: 3rem;
            background-size: 300% 300%;
            backdrop-filter: blur(1rem);
            border-radius: 5rem;
            transition: 0.5s;
            animation: gradient_301 5s ease infinite;
            border: double 4px transparent;
            background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #ff9b17d7 45%, #f9ff41 67%, #feb200d7 87%);
            background-origin: border-box;
            background-clip: content-box, border-box;
          }

          #container-stars {
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transition: 0.5s;
            backdrop-filter: blur(1rem);
            border-radius: 5rem;
          }

          strong {
            z-index: 2;
            font-family: 'Poppins' sans-serif;
            font-size: 16px;
            letter-spacing: 3px;
            color: #FFFFFF;
            text-shadow: 0 0 4px rgb(0, 0, 0);
          }

          #glow {
            position: absolute;
            display: flex;
            width: 12rem;
          }

          .circle {
            width: 100%;
            height: 30px;
            filter: blur(2rem);
            animation: pulse_3011 4s infinite;
            z-index: -1;
          }

          .circle:nth-of-type(1) {
            background: rgba(0, 0, 1860 0.936);
          }

          .circle:nth-of-type(2) {
            background: rgba(0, 0, 1860 0.936);
          }

          .btn:hover #container-stars {
            z-index: 1;
            background-color: #212121;
          }

          .btn:hover {
            transform: scale(1.1)
          }

          .btn:active {
            border: double 4px #FE53BB;
            background-origin: border-box;
            background-clip: content-box, border-box;
            animation: none;
          }

          .btn:active .circle {
            background: #FE53BB;
          }

          #stars {
            position: relative;
            background: transparent;
            width: 200rem;
            height: 200rem;
          }

          #stars::after {
            content: "";
            position: absolute;
            top: -10rem;
            left: -100rem;
            width: 100%;
            height: 100%;
            animation: animStarRotate 90s linear infinite;
          }

          #stars::after {
            background-image: radial-gradient(#ffffff 1px, transparent 1%);
            background-size: 50px 50px;
          }

          #stars::before {
            content: "";
            position: absolute;
            top: 0;
            left: -50%;
            width: 170%;
            height: 500%;
            animation: animStar 60s linear infinite;
          }

          #stars::before {
            background-image: radial-gradient(#ffffff 1px, transparent 1%);
            background-size: 50px 50px;
            opacity: 0.5;
          }

          @keyframes animStar {
            from {
              transform: translateY(0);
            }

            to {
              transform: translateY(-135rem);
            }
          }

          @keyframes animStarRotate {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0);
            }
          }

          @keyframes gradient_301 {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes pulse_3011 {
            0% {
              transform: scale(0.75);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            }

            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }

            100% {
              transform: scale(0.75);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Seller;
