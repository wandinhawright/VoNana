import React from 'react';
import Header from './base/header.jsx';
import Footer from './base/footer';
import './base/index.css';
import BannerPreparar from './preparo/bannerpreparar.jsx';
import Introducao from './preparo/introducao.jsx';

function Preparo() {
  return (
    <div className="Preparo">
      <Header />
        <BannerPreparar />
            <Introducao />
                <Footer /> 
   <main style={{ padding: 'px' }}>
      </main>
    </div>
  );
}

export default Preparo;