import React, { useState } from 'react';
import { Phone, Mail, MapPin, MapIcon as WhatsappIcon } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/918247819853?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get in <span className="text-purple-600">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+918247819853" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+91 824 781 9853</span>
                </a>
                <a href="mailto:info@beautyinthebeast.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>info@beautyinthebeast.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Secunderabad, Hyderabad, Telangana 500039</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 11:00 PM</p>
                <p>Saturday: 9:00 AM - 11:00 PM</p>
                <p>Sunday: 9:00 AM - 11:00 PM</p>
              </div>
            </div>
            
            <button
              onClick={() => window.open('https://wa.me/918247819853', '_blank')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105"
            >
              <WhatsappIcon className="h-5 w-5" />
              Contact on WhatsApp
            </button>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
