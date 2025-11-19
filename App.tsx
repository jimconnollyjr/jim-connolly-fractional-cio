import React from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import BioSection from './components/BioSection';
import AboutSection from './components/AboutSection';
import RoadmapSection from './components/RoadmapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <ServicesSection />
        <HeroSection />
        <BioSection />
        <AboutSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;