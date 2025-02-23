import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle as WhatsappIcon } from 'lucide-react';



export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917989169551', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Beauty in the Beast</h3>
            <p className="text-gray-400">Providing premium pet care services since 2020</p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <WhatsappIcon className="h-5 w-5" />
              Chat with us
            </button>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="tel:+917989169551"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                +91 7989169551
              </a>
              <a 
                href="mailto:info@beautyinthebeast.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@beautyinthebeast.com
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
              Secunderabad, Hyderabad, Telangana 500039
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Beauty in the Beast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}