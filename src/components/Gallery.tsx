import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    title: 'Professional Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80',
    title: 'Grooming Services'
  },
  {
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
    title: 'Pet Adoption'
  },
  {
    url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
    title: 'Luxury Boarding'
  },
  {
    url: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80',
    title: 'Healthcare'
  },
  {
    url: 'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?auto=format&fit=crop&q=80',
    title: 'Home Services'
  },
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80',
    title: 'Pet Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80',
    title: 'Dog Training'
  }
];

export default function Gallery() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-purple-600">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}