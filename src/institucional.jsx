import React from 'react';
import Header from './base/header.jsx';
import Footer from './base/footer.jsx';
import './base/index.css';
import BannerInstitucional from './institucional/bannerinstitucional.jsx';
import Historia from './institucional/historia.jsx';

function Institucional() {
  return (
    <div className="Institucional">
      <Header />
      <BannerInstitucional />
      <Historia />
      <Footer /> 


      <main style={{ padding: 'px' }}>
      </main>
    </div>
  );
}

export default Institucional;