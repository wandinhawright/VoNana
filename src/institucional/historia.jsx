import React from 'react';
import { useTranslation } from 'react-i18next';
import './AppInstitucional.css';

const Historia = () => {
  const { t } = useTranslation();

  return (
    <section className="historia-section">
      <div className="historia-container">
        <div className="historia-header">
          <h2 className="title-top">{t('institucional.historia.titleTop')}</h2>
          <h3 className="title-bottom">{t('institucional.historia.titleBottom')}</h3>
        </div>

        <div className="historia-content">
          <p>
           {t('institucional.historia.intro')}
          </p>

          <div className="nossa-historia-box">
            <h4>{t('institucional.historia.boxTitle')}</h4>
            <p>
              {t('institucional.historia.p1')}
            </p>
            <p>
              {t('institucional.historia.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;