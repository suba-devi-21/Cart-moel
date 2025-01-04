import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
