import React, { useState } from 'react';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  if (!isOpen) return null;

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}) 
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, prevQuantities[id] + delta); 
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * quantities[item.id]), 0);
  };

  const calculateDiscountPrice = () => {
    return calculateTotalPrice() * 0.1; 
  };

  const handleRemoveFromCart = (id) => {
    onRemoveFromCart(id);
    setQuantities((prevQuantities) => {
      delete prevQuantities[id];
      return { ...prevQuantities };
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <span className="cart-item-title">{item.title}</span>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    <div className="quantity-control">
                      <button className="quantity-button" onClick={() => handleQuantityChange(item.id, -1)}>
                        -
                      </button>
                      <span className="quantity-value">{quantities[item.id]}</span>
                      <button className="quantity-button" onClick={() => handleQuantityChange(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button className="remove-from-cart-button" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-totals">
          <p className="cart-total-label">Subtotal:</p>
          <p className="cart-total-value">${calculateTotalPrice().toFixed(2)}</p>
          <p className="cart-discount-label">Discount (10%):</p>
          <p className="cart-discount-value">-${calculateDiscountPrice().toFixed(2)}</p>
          <p className="cart-total-label">Total:</p>
          <p className="cart-total-value">${(calculateTotalPrice() - calculateDiscountPrice()).toFixed(2)}</p>
        </div>
        <button className="close-modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
