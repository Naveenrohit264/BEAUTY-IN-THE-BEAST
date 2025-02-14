import React from 'react';
import { ChevronRight, Phone, MapIcon as WhatsappIcon } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918247819853', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-32 sm:py-48">
        <div className="text-center space-y-8">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Beauty in the Beast
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              Pampering Your Pets with Love & Care!
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Professional Pet Grooming & Care Services
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={handleWhatsAppClick}
              className="group flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105"
            >
              Contact on WhatsApp
              <WhatsappIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all transform hover:scale-105">
              Book Appointment
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80" 
                alt="Professional Grooming"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Professional Grooming</h3>
              <p className="text-gray-600">Expert care for your furry friends</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80" 
                alt="Pet Training"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
              <p className="text-gray-600">Behavior training by professionals</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80" 
                alt="Pet Boarding"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Luxury Boarding</h3>
              <p className="text-gray-600">Home away from home</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1527526029430-319f10814151?auto=format&fit=crop&q=80" 
                alt="Pet Sales"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Pet Adoption</h3>
              <p className="text-gray-600">Find your perfect companion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}