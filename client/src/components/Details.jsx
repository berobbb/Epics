import React, { useState } from "react";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";

export default function Details({ id }) {
  const navigate = useNavigate();
  const product = data.find((item) => item.id === id);

  if (!product) {
    return <h1 className="text-center text-2xl font-bold mt-10">Product Not Found</h1>;
  }
  
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Create cart item
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: activeSize,
      color: activeColor,
      quantity: quantity
    };

    // Get existing cart from localStorage or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(item => 
      item.id === cartItem.id && 
      item.size === cartItem.size && 
      item.color === cartItem.color
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      existingCart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-10 mt-32">
      {/* Left Section - Single Product Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={product.image} alt={product.name} className="w-96 h-96 object-cover rounded-lg shadow-md" />
      </div>

      {/* Right Section - Product Details */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
          <p className="text-gray-600 text-lg">{product.rating}/5</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold">${product.price}</p>
          {product.originalPrice && (
            <p className="text-xl text-gray-500 line-through">${product.originalPrice}</p>
          )}
          {product.discount && (
            <p className="text-red-500 text-lg font-semibold">-{product.discount}%</p>
          )}
        </div>

        {/* Colors Section */}
        <div>
          <h3 className="text-lg font-semibold">Select Colors</h3>
          <div className="flex gap-3 mt-2">
            <button 
              onClick={() => setActiveColor("Black")} 
              className={`w-8 h-8 bg-black rounded-full ${activeColor === "Black" ? "border-2 border-blue-500" : ""}`}
            ></button>
            <button 
              onClick={() => setActiveColor("Gray")} 
              className={`w-8 h-8 bg-gray-700 rounded-full cursor-pointer ${activeColor === "Gray" ? "border-2 border-blue-500" : ""}`}
            ></button>
            <button 
              onClick={() => setActiveColor("Slate")} 
              className={`w-8 h-8 bg-slate-400 rounded-full cursor-pointer ${activeColor === "Slate" ? "border-2 border-blue-500" : ""}`}
            ></button>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="text-lg font-semibold">Choose Size</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={() => setActiveSize("Small")}
              className={`px-4 py-2 border rounded-lg transition ${
                activeSize === "Small" ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >Small</button>
            <button 
              onClick={() => setActiveSize("Medium")}
              className={`px-4 py-2 border rounded-lg transition ${
                activeSize === "Medium" ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >Medium</button>
            <button 
              onClick={() => setActiveSize("Large")}
              className={`px-4 py-2 border rounded-lg transition ${
                activeSize === "Large" ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >Large</button>
            <button 
              onClick={() => setActiveSize("X-Large")}
              className={`px-4 py-2 border rounded-lg transition ${
                activeSize === "X-Large" ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >X-Large</button>
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <h3 className="text-lg font-semibold">Quantity</h3>
          <div className="flex items-center gap-3 mt-2">
            <button 
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="px-3 py-1 border rounded-lg bg-gray-100"
            >-</button>
            <span className="px-4 py-2">{quantity}</span>
            <button 
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-3 py-1 border rounded-lg bg-gray-100"
            >+</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          disabled={!activeSize || !activeColor}
          className={`w-full py-3 rounded-lg mt-4 transition ${
            !activeSize || !activeColor 
              ? "bg-gray-300 cursor-not-allowed" 
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >

          {!activeSize || !activeColor ? "Select size and color" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}