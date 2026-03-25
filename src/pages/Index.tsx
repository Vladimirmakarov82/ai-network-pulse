
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PulseCardDemo from '@/components/PulseCardDemo';
import ProductLayers from '@/components/ProductLayers';
import ClubConnect from '@/components/ClubConnect';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Нетворкинг эффективнее в 100 раз — Pulse Community</title>
        <meta name="description" content="Pulse — инфраструктурный слой поверх бизнес-клубов. Pulse Card, Pulse Feed, PulsIA — делаем участников видимыми за пределами чата." />
        <link rel="canonical" href="https://ai-network-pulse.lovable.app/" />
        <meta property="og:url" content="https://ai-network-pulse.lovable.app/" />
        <meta property="og:title" content="Нетворкинг эффективнее в 100 раз — Pulse Community" />
        <meta property="og:description" content="Pulse — инфраструктурный слой поверх бизнес-клубов. Делаем участников видимыми за пределами чата." />
        <meta property="og:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
        <meta name="twitter:title" content="Нетворкинг эффективнее в 100 раз — Pulse Community" />
        <meta name="twitter:description" content="Pulse — инфраструктурный слой поверх бизнес-клубов." />
        <meta name="twitter:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <PulseCardDemo />
        <ProductLayers />
        <ClubConnect />
        <Footer />
      </div>
    </>
  );
};

export default Index;
