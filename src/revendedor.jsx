import React from 'react';
import Header from './base/header.jsx';
import Footer from './base/footer';
import './base/index.css';
import BannerRevendedor from './seja um revendedor/titulorevendedor.jsx';
import OndeEncontrar from './seja um revendedor/ondeencontrar.jsx';

function Revendedor() {
  return (
    <div className="Revendedor">
      <Header />
      <BannerRevendedor />
      <OndeEncontrar />
      <Footer /> 


      <main style={{ padding: 'px' }}>
      </main>
    </div>
  );
}

export default Revendedor;