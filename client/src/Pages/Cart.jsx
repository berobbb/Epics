import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  
  // Load cart items from localStorage on component mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    calculateSubtotal(items);
  }, []);

  // Calculate subtotal whenever cart items change
  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  // Update item quantity
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="bg-black text-white px-6 py-3 rounded-lg inline-flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center border-b py-4 gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <div className="text-gray-600 text-sm mt-1">
                    {item.size && <span className="mr-3">Size: {item.size}</span>}
                    {item.color && <span>Color: {item.color}</span>}
                  </div>
                  <div className="text-black font-medium mt-1">${item.price}</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    className="p-1 border rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className="p-1 border rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="text-right">
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  <button 
                    onClick={() => removeItem(index)}
                    className="text-red-500 flex items-center mt-2"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-6">
              <Link to="/" className="text-black flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary Section */}
          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{subtotal > 50 ? 'Free' : '$5.00'}</span>
              </div>
              <div className="border-t pt-3 font-bold flex justify-between">
                <span>Total</span>
                <span>${(subtotal > 50 ? subtotal : subtotal + 5).toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>Free shipping on orders over $50</p>
              <p className="mt-2">30-day easy returns</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}