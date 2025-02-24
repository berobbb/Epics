import React from "react";
import { Star } from "lucide-react"; // Import Star component
import { Link } from "react-router-dom"; // Import Link component
import { data as products } from "../../data/data";

// Function for rating
function ProductRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < Math.floor(rating)
              ? "text-yellow-500 fill-yellow-500"
              : index === Math.floor(rating) && rating % 1 !== 0
              ? "text-yellow-500 fill-yellow-500 opacity-50"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );
}

// Function for card component styling
function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0"
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 text-sm font-medium rounded">
            -{product.discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <ProductRating rating={product.rating} />
      </div>
      <div className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 border border-gray-300 bg-black text-white hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default function NewClothes() {
  return (
    <section className="py-12 px-4 mt-32">
      <h2 className="text-4xl font-bold text-center mb-8">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          View All
        </button>
      </div>
    </section>
  );
}
