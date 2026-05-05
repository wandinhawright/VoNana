import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Appindex.css';
import cestaImg from '../assets/cestadepaodequeijo.png'; 

const LigaForno = () => {
  const { t } = useTranslation();

  return (
    <section className="liga-forno-container">
      <div className="liga-forno-content">
        <h2 className="liga-forno-title">{t('home.ligaForno.title')}</h2>
        
        <p className="liga-forno-text">
          {t('home.ligaForno.text')}
        </p>

        <Link to="/institucional">
          <button className="btn-conheca">{t('home.ligaForno.button')}</button>
        </Link>
      </div>

      <img src={cestaImg} alt={t('home.ligaForno.basketAlt')} className="cesta-posicionada" />
    </section>
  );
};

export default LigaForno;