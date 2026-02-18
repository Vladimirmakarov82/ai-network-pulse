
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PulseAI from '@/components/PulseAI';
import CoffeeSyncSection from '@/components/CoffeeSyncSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <PulseAI />
      <CoffeeSyncSection />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
