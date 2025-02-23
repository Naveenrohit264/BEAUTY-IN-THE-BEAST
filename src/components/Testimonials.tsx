import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'The grooming service was exceptional! My dog looks and smells amazing. The staff was so gentle and professional.',
    rating: 5,
    pet: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'Best pet training services in town! Our puppy learned so much in just a few sessions.',
    rating: 5,
    pet: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80'
  },
  {
    name: 'Rohit',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'The boarding facility is amazing! My cats were so well taken care of during our vacation.',
    rating: 5,
    pet: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <div className="bg-purple-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Happy <span className="text-purple-600">Customers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
               
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <img 
                src={testimonial.pet}
                alt="Pet"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}