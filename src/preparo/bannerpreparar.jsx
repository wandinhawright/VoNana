import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AppPreparo.css';
// Importe a imagem do forno/mão ligando o fogão
import imgFornoDesktop from '../assets/bannerindex2.png';
import imgFornoMobile from '../assets/bannerindex2celular.png';

const BannerPreparar = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(media.matches);
    update();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const imgForno = isMobile ? imgFornoMobile : imgFornoDesktop;

  return (
    <section 
      className="banner-preparar" 
      style={{ backgroundImage: `url(${imgForno})` }}
    >
      <div className="preparar-overlay">
        <h1 className="preparar-title">{t('pages.consumptionTips.title')}</h1>
      </div>
    </section>
  );
};

export default BannerPreparar;