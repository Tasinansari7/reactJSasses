import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6)', backgroundSize: 'cover', height: '90vh', color: 'white' }}>
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for aromatic and medicinal houseplants.</p>
      <Link to="/products">
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Landing;
