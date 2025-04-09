import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from './cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Object.values(cart).map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', float: 'left', marginRight: '1rem' }} />
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => dispatch(increment(item.id))}>+</button>
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}
          <h3>Total Cost: ${total}</h3>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/products"><button>Continue Shopping</button></Link>
            <button style={{ marginLeft: '1rem' }}>Checkout (Coming Soon)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
