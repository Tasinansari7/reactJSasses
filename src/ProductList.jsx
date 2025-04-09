import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';

const products = [
  { id: 1, name: 'Lavender', category: 'Aromatic', price: 10, image: 'https://via.placeholder.com/150/92c952' },
  { id: 2, name: 'Basil', category: 'Medicinal', price: 8, image: 'https://via.placeholder.com/150/771796' },
  { id: 3, name: 'Mint', category: 'Aromatic', price: 6, image: 'https://via.placeholder.com/150/24f355' },
  { id: 4, name: 'Aloe Vera', category: 'Medicinal', price: 12, image: 'https://via.placeholder.com/150/d32776' },
  { id: 5, name: 'Rosemary', category: 'Aromatic', price: 9, image: 'https://via.placeholder.com/150/f66b97' },
  { id: 6, name: 'Turmeric', category: 'Medicinal', price: 11, image: 'https://via.placeholder.com/150/56a8c2' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [clicked, setClicked] = useState({});

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    setClicked({ ...clicked, [product.id]: true });
  };

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div style={{ padding: '2rem' }}>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat} Plants</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {products.filter(p => p.category === cat).map(p => (
              <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%' }} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <button disabled={clicked[p.id]} onClick={() => handleAdd(p)}>
                  {clicked[p.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
