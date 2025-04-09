import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
