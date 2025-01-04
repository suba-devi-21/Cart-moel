import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-title">My Shop</span>
        <button className="cart-button" onClick={onCartClick}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;