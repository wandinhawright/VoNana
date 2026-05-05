import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppRevendedor.css';
// Importe a imagem do forno/mão ligando o fogão
import imgForno from '../assets/revendedorimg.png'; 

const BannerRevendedor = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="banner-revendedor" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="revendedor-overlay">
        <h1 className="revendedor-title">{t('pages.reseller.title')}</h1>
      </div>
    </section>
  );
};

export default BannerRevendedor;