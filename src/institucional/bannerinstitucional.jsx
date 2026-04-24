import React from 'react';
import './AppInstitucional.css';
import imgForno from '../assets/fachadavonana.png'; 

const BannerInstitucional = () => {
  return (
    <section 
      className="banner-institucional" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="institucional-overlay">
        <h1 className="institucional-title">SOBRE A EMPRESA</h1>
      </div>
    </section>
  );
};

export default BannerInstitucional;