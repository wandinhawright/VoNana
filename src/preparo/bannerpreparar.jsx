import React from 'react';
import './AppPreparo.css';
// Importe a imagem do forno/mão ligando o fogão
import imgForno from '../assets/paodequeijocafe.png'; 

const BannerPreparar = () => {
  return (
    <section 
      className="banner-preparar" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="preparar-overlay">
        <h1 className="preparar-title">COMO PREPARAR</h1>
      </div>
    </section>
  );
};

export default BannerPreparar;