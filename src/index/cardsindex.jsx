import React from 'react';
import imgPao from '../assets/paodequeijo.jpg';
import imgQueijo from '../assets/queijocanastra.png';
import imgSuporte from '../assets/fotoia.png';
import { useTranslation } from 'react-i18next';
import '../base/index.css';
import './Appindex.css';

const Features = () => {
  const { t } = useTranslation();

  const itens = [
    {
      id: 1,
      titulo: t('home.features.items.traditionTitle'),
      texto: t('home.features.items.traditionText'),
      img: imgPao
    },
    {
      id: 2,
      titulo: t('home.features.items.premiumCheeseTitle'),
      texto: t('home.features.items.premiumCheeseText'),
      img: imgQueijo
    },
    {
      id: 3,
      titulo: t('home.features.items.supportTitle'),
      texto: t('home.features.items.supportText'),
      img: imgSuporte
    }
  ];

  return (
    <section className="features-section-wrapper">
      <div className="features-container">
        
        {itens.map((item, index) => (
          <div key={item.id} className="feature-card-wrapper">
            <div className={`feature-item ${index !== itens.length - 1 ? 'has-divider' : ''}`}>
              
              <div className="feature-icon-container">
                <img src={item.img} alt={item.titulo} />
              </div>

              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;