    import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // 🔹 useState Hook (Used to store products)
  const [products, setProducts] = useState([]);

  // 🔹 useState Hook (Used to store cart items)
  const [cart, setCart] = useState([]);

  // 🔹 useEffect Hook (Used to load products when page loads)
  useEffect(() => {
    const productData = [
      { id: 1, name: "Shoes", price: 50 },
      { id: 2, name: "Shirt", price: 30 },
      { id: 3, name: "Watch", price: 100 }
    ];

    setProducts(productData);
  }, []); 
  // Empty dependency array → runs only once when component mounts

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]); 
    // 🔹 useState setter used to update cart state
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Calculate Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Simple Shopping Website</h1>

      {/* Home Section */}
      <div className="products">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Buy</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}

        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

export default shopping;