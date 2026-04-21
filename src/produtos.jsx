import React from 'react';
import Header from './base/header.jsx';
import Footer from './base/footer';
import './base/index.css';
import TituloProdutos from './produtos/Tituloprodutos.jsx';
import ProductSection from './produtos/productsection.jsx';

function Produtos() {
  return (
    <div className="Produtos">
      <Header />
      <TituloProdutos />
      <ProductSection />
      <Footer /> 


      <main style={{ padding: 'px' }}>
      </main>
    </div>
  );
}

export default Produtos;