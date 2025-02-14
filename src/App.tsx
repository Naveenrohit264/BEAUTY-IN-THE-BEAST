import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;