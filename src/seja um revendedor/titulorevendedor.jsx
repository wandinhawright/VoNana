import React from 'react';
import './AppRevendedor.css';
// Importe a imagem do forno/mão ligando o fogão
import imgForno from '../assets/revendedorimg.png'; 

const BannerRevendedor = () => {
  return (
    <section 
      className="banner-revendedor" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="revendedor-overlay">
        <h1 className="revendedor-title">SEJA UM REVENDEDOR</h1>
      </div>
    </section>
  );
};

export default BannerRevendedor;