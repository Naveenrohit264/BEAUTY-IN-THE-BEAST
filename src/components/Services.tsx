import React from 'react';
import { Bath, Scissors, Dog, Baby, Home, Syringe, HeartPulse, GraduationCap, Sparkles, Brush, Nut as Cut } from 'lucide-react';

const groomingServices = [
  {
    icon: Bath,
    title: 'Luxury Bath',
    description: 'Indulge your pet in our premium bathing experience featuring organic, hypoallergenic shampoos and conditioners. Each session includes a relaxing massage, thorough cleansing, and aromatherapy treatment to leave your pet feeling refreshed and rejuvenated.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80'
  },
  {
    icon: Cut,
    title: 'Breed Specific Cuts',
    description: 'Our expert groomers specialize in breed-specific styling techniques, ensuring your pet\'s cut complements their natural features. From show cuts to practical trims, we maintain breed standards while considering your pet\'s lifestyle and your preferences.',
    image: 'https://media.istockphoto.com/id/1480568295/photo/closeup-of-dog-groomer-performing-haircut-to-shih-tzu-dog-breed.webp?a=1&b=1&s=612x612&w=0&k=20&c=YEwefYgzKO4rHL_Ycwp79Xwd-yRe546S7DKmOFl0JCk='
  },
  {
    icon: Brush,
    title: 'De-matting & Brushing',
    description: 'Our thorough brushing and de-matting service helps maintain your pet\'s coat health. We use specialized tools and gentle techniques to remove tangles, prevent matting, and promote healthy fur growth. Includes coat conditioning and skin health check.',
    image: 'https://images.unsplash.com/photo-1558929996-da64ba858215?auto=format&fit=crop&q=80'
  }
];

const services = [
  {
    icon: Bath,
    title: 'Premium Grooming',
   
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535096626672-4595be84895d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558929996-da64ba858215?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: Dog,
    title: 'Pet Adoption',
   
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601758282760-b6cc3d07523d?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: HeartPulse,
    title: 'Luxury Boarding',

    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601758282760-b6cc3d07523d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: Syringe,
    title: 'Healthcare',
    image: 'https://media.istockphoto.com/id/885571364/photo/young-french-bulldog-on-the-visit-to-the-vet.webp?a=1&b=1&s=612x612&w=0&k=20&c=DGDFrlO0tZdrkIlF1AU82SxYs_7VXhCj8E8RvmufeLU=',
    gallery: [
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80'
    ]
  },
  {
    icon: Home,
    title: 'Home Services',
    
    image: 'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = React.useState<number | null>(null);

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Featured Grooming Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-2 mb-16">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-center">
              Featured <span className="text-purple-600">Grooming Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomingServices.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-purple-500/30 z-10 group-hover:from-purple-900/80 group-hover:to-purple-500/40 transition-all duration-300"></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <service.icon className="h-8 w-8 mb-3" />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-100 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Section */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Other <span className="text-purple-600">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setSelectedService(index)}
              onMouseLeave={() => setSelectedService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10"></div>
              <img 
                src={selectedService === index ? service.gallery[1] : service.image}
                alt={service.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <service.icon className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
                
                {selectedService === index && (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {service.gallery.map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img}
                        alt={`${service.title} ${imgIndex + 1}`}
                        className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}