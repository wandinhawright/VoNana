import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppProdutos.css';
import backgroundMesa from '../assets/fundoia.png'; 

const TituloProdutos = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="banner-produtos" 
      style={{ backgroundImage: `url(${backgroundMesa})` }}
    >
      <div className="banner-overlay">
        <h1 className="banner-title">{t('pages.products.title')}</h1>
      </div>
    </section>
  );
};

export default TituloProdutos;