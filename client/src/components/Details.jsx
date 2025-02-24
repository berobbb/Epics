import React, { useState } from "react";
import { data } from "../../data/data";

import { use } from "react";

export default function Details({ id }) {
  const product = data.find((item) => item.id === id);

  if (!product) {
    return <h1 className="text-center text-2xl font-bold mt-10">Product Not Found</h1>;
  }
  const[activeSize,setActiveSize] =useState("")
  const[activeColor,setActiveColor]=useState("")
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
            <button  onClick={()=>setActiveColor("one")} className={`w-8 h-8 bg-black rounded-full ${activeColor==="one"?"border-2 border-black ":""}`}>1</button>
            <button  onClick={()=>setActiveColor("two")}className={`w-8 h-8 bg-gray-700 rounded-full cursor-pointer${activeColor==="two"?"border-2 border-black ":""}`}></button>
            <button className="w-8 h-8  bg-slate-400 rounded-full cursor-pointer"></button>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="text-lg font-semibold">Choose Size</h3>
          <div className="lg:flex-row flex flex-col gap-3 mt-2">
          <button
              onClick={() => setActiveSize("Small")}
              className={`px-4 py-2 border rounded-lg transition ${
                activeSize === "Small" ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >Small</button>
            <button onClick={()=>setActiveSize("Medium")}
            className={`px-4 py-2 border rounded-lg transition ${activeSize==="Medium"?"bg-black text-white" : "hover:bg-gray-100"}`}>
            Medium</button>
            <button onClick={()=>setActiveSize("Large")}className={`px-4 py-2 border rounded-lg transition ${activeSize==="Large" ?"bg-black text-white" : "hover:bg-gray-100"}`}>Large</button>
            <button onClick={()=>setActiveSize("X-Large")}className={`px-4 py-2 border rounded-lg transition ${activeSize==="X-Large" ?"bg-black text-white" : "hover:bg-gray-100"}`}>X-Large</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
