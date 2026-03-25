
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PulseAI from '@/components/PulseAI';
import CoffeeSyncSection from '@/components/CoffeeSyncSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Нетворкинг эффективнее в 100 раз — Pulse Community</title>
        <meta name="description" content="Нейронка Pulsia анализирует оффлайн-встречи и находит идеальные совпадения между участниками — клиентов, партнёров, инвесторов. 200+ предпринимателей с оборотом $2–30M." />
        <link rel="canonical" href="https://ai-network-pulse.lovable.app/" />
        <meta property="og:url" content="https://ai-network-pulse.lovable.app/" />
        <meta property="og:title" content="Нетворкинг эффективнее в 100 раз — Pulse Community" />
        <meta property="og:description" content="Нейронка Pulsia анализирует оффлайн-встречи и находит идеальные совпадения между участниками — клиентов, партнёров, инвесторов." />
        <meta property="og:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
        <meta name="twitter:title" content="Нетворкинг эффективнее в 100 раз — Pulse Community" />
        <meta name="twitter:description" content="Нейронка Pulsia анализирует оффлайн-встречи и находит идеальные совпадения между участниками." />
        <meta name="twitter:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <PulseAI />
        <Footer />
      </div>
    </>
  );
};

export default Index;
