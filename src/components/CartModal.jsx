import React from 'react';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  if (!isOpen) return null;

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
                    <span className="cart-item-price">${item.price}</span>
                  </div>
                </div>
                <button className="remove-from-cart-button" onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className="close-modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
