
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductLayers from '@/components/ProductLayers';
import ClubConnect from '@/components/ClubConnect';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pulse — протокол цифровой идентичности для бизнес-сообществ</title>
        <meta name="description" content="Pulse делает участников бизнес-клубов видимыми за пределами чата. Pulse Card, Pulse Feed, PulsIA — инфраструктура нетворкинга для комьюнити." />
        <link rel="canonical" href="https://ai-network-pulse.lovable.app/" />
        <meta property="og:url" content="https://ai-network-pulse.lovable.app/" />
        <meta property="og:title" content="Pulse — протокол цифровой идентичности для бизнес-сообществ" />
        <meta property="og:description" content="Pulse делает участников бизнес-клубов видимыми за пределами чата. Pulse Card, Pulse Feed, PulsIA." />
        <meta property="og:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
        <meta name="twitter:title" content="Pulse — протокол цифровой идентичности для бизнес-сообществ" />
        <meta name="twitter:description" content="Pulse делает участников бизнес-клубов видимыми за пределами чата." />
        <meta name="twitter:image" content="https://ai-network-pulse.lovable.app/og-main.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <ProductLayers />
        <ClubConnect />
        <Footer />
      </div>
    </>
  );
};

export default Index;
