
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PulseAI from '@/components/PulseAI';
import CoffeeSyncSection from '@/components/CoffeeSyncSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <PulseAI />
      <CoffeeSyncSection />
      <Footer />
    </div>
  );
};

export default Index;
