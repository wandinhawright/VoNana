import React from 'react';
import Header from './header'; 
import Hero from './index/heroindex';
import './index.css';
import Features from './index/cardsindex';
import LigaForno from './index/ligaoforno';
import Escolhas from './index/escolhasindex';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <LigaForno />
      <Escolhas />
      <Footer />

      <main style={{ padding: 'px' }}>
      </main>
    </div>
  );
}

export default App;