import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import CartModal from './components/CartModal';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} onCartClick={toggleModal} />
      <h1 className='text-center text-stone-900 text-4xl italic font-bold p-4'>Products</h1>
      <div className="container mx-auto p-4">
        <ProductList products={products} onAddToCart={addToCart} />
      </div>
      <CartModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        cartItems={cart}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;

