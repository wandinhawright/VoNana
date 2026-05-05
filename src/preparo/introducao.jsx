import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppPreparo.css';

const Introducao = () => {
  const { t } = useTranslation();

  return (
    <section className="preparar-texto-section">
      <div className="preparar-texto-container">
        <h2 className="preparar-texto-title">
          {t('preparo.intro.title')}
        </h2>
        
        <div className="preparar-texto-content">
          <p>
            {t('preparo.intro.text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introducao;