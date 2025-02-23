import { ChevronRight, MessageCircle as WhatsappIcon, Star, Clock, Shield, Heart } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918247819853', '_blank');
  };

  const features = [
    { icon: Star, title: "Premium Service", description: "5-star grooming experience" },
    { icon: Clock, title: "Flexible Hours", description: "Open 7 days a week" },
    { icon: Shield, title: "Expert Care", description: "Certified professionals" },
    { icon: Heart, title: "Love & Care", description: "Gentle handling guaranteed" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"
        style={{ transform: 'translateZ(-10px) scale(2)' }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="animate-fade-in-down">
              {/* Highlight Banner */}
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8 animate-bounce">
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Trusted by 1000+ Pet Parents</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Beauty in the Beast
                </span>
              </h1>

              {/* Subheadings with enhanced typography */}
              <p className="text-2xl md:text-3xl text-gray-700 font-light mb-4">
                Pampering Your Pets with Love & Care!
              </p>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience premium pet grooming services tailored to your furry friend's needs
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <button 
                onClick={handleWhatsAppClick}
                className="group flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <WhatsappIcon className="h-5 w-5" />
                Contact on WhatsApp
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <feature.icon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Professional Grooming",
                description: "Luxury spa treatments for pets",
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80"
              },
              {
                title: "Expert Training",
                description: "Certified behavioral training",
                image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80"
              },
              {
                title: "Luxury Boarding",
                description: "Premium pet accommodation",
                image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80"
              },
              {
                title: "Pet Adoption",
                description: "Find your perfect companion",
                image: "https://images.unsplash.com/photo-1527526029430-319f10814151?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 className="text-xl font-semibold mb-1 group-hover:translate-y-0 transform translate-y-2 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}