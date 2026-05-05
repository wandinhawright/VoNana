import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppInstitucional.css';
import imgForno from '../assets/fachadavonana.png'; 

const BannerInstitucional = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="banner-institucional" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="institucional-overlay">
        <h1 className="institucional-title">{t('pages.about.title')}</h1>
      </div>
    </section>
  );
};

export default BannerInstitucional;