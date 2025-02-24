import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import NewArrival from '../components/NewArrivals';
import Like from '../components/Like';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes has not only grown but also on-point with the latest trends.",
    verified: true,
  },
  {
    id: 4,
    name: 'Emily R.',
    rating: 4,
    text: "Shopco offers a great variety of options for every occasion. The quality is consistent, and the customer service is excellent!",
    verified: true,
  },
  {
    id: 5,
    name: 'Michael B.',
    rating: 5,
    text: "I can always count on Shopco for trendy outfits. Their delivery is quick, and the products are always as described.",
    verified: true,
  },
  {
    id: 6,
    name: 'Sophie T.',
    rating: 4,
    text: "Good selection and reasonable pricing. I highly recommend Shopco for anyone looking to refresh their wardrobe!",
    verified: true,
  },
];

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      {/* Product Details Section */}
      <Details id={id} />

      {/* Testimonials Section */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((testi) => (
          <div key={testi.id} className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{testi.name}</h3>
            <p className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-2">{testi.text}</p>
            {testi.verified && <p className="text-green-600 text-sm mt-1">✔ Verified Buyer</p>}
          </div>
        ))}
      </div>
      <Like/>
      
    </div>
  );
}
