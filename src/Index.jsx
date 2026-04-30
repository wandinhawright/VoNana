import React from 'react';
import Header from './base/header.jsx'; 
import Hero from './index/heroindex';
import './base/index.css';
import './index/Appindex.css';
import Features from './index/cardsindex';
import LigaForno from './index/ligaoforno';
import Escolhas from './index/escolhasindex';
import Footer from './base/footer';
import InstagramFeed from './index/instagram';

function Index() {
  return (
    <div className="Index">
      <Header />
      <Hero />
      <LigaForno />
      <Features />
      <Escolhas /> 
      <InstagramFeed />
      <Footer /> 


      <main style={{ padding: '3px' }}>
      </main>
    </div>
  );
}

export default Index;