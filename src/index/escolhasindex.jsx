import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Appindex.css';
import img1 from '../assets/logocomfundo.png';
import img2 from '../assets/revendedorimg.png';
import img3 from '../assets/paodequeijocafe.png';

const Escolhas = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSaibaMaisClick = (rota) => {
    navigate(rota);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cards = [
    {
      id: 1,
      img: img1,
      titulo: t('home.highlights.companyTitle'),
      texto: t('home.highlights.companyText'),
      rota: '/institucional'
    },
    {
      id: 2,
      img: img2,
      titulo: t('home.highlights.productsTitle'),
      texto: t('home.highlights.productsText'),
      rota: '/produtos'
    },
    {
      id: 3,
      img: img3,
      titulo: t('home.highlights.tipsTitle'),
      texto: t('home.highlights.tipsText'),
      rota: '/preparo'
    }
  ];

  return (
    <section className="parallax-section">
      <div className="destaque-grid">
        {cards.map((card) => (
          <div key={card.id} className="circle-card">
            <div className="circle-image-wrapper">
              <img src={card.img} alt={card.titulo} className="circle-img" />
              
              <div className="info-overlay">
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>
                <button
                  className="btn-saiba-mais"
                  type="button"
                  onClick={() => handleSaibaMaisClick(card.rota)}
                >
                  {t('common.learnMore')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Escolhas;