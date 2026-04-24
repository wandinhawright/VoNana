import React from 'react';
import './AppProdutos.css';
import backgroundMesa from '../assets/fundoia.png'; 

const TituloProdutos = () => {
  return (
    <section 
      className="banner-produtos" 
      style={{ backgroundImage: `url(${backgroundMesa})` }}
    >
      <div className="banner-overlay">
        <h1 className="banner-title">PRODUTOS</h1>
      </div>
    </section>
  );
};

export default TituloProdutos;