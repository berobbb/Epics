
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';

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
  {
    id: 7,
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: 8,
    name: 'Alex K.',
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: 9,
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes has not only grown but also on-point with the latest trends.",
    verified: true,
  },
  {
    id: 10,
    name: 'Emily R.',
    rating: 4,
    text: "Shopco offers a great variety of options for every occasion. The quality is consistent, and the customer service is excellent!",
    verified: true,
  },
  {
    id: 11,
    name: 'Michael B.',
    rating: 5,
    text: "I can always count on Shopco for trendy outfits. Their delivery is quick, and the products are always as described.",
    verified: true,
  },
  {
    id: 12,
    name: 'Sophie T.',
    rating: 4,
    text: "Good selection and reasonable pricing. I highly recommend Shopco for anyone looking to refresh their wardrobe!",
    verified: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-black tracking-tight">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-2">
          <button
            className="p-2 border rounded-full hover:bg-gray-200"
            onClick={previous}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="p-2 border rounded-full hover:bg-gray-200"
            onClick={next}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 border rounded-lg bg-white shadow-lg z-10"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium">{testimonial.name}</span>
                {testimonial.verified && <Check className="w-4 h-4 text-green-500" />}
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}