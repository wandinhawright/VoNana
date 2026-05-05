import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AppPreparo.css';
import img1 from '../assets/pqegoiabada.jpg';
import img2 from '../assets/pqepresunto.png';
import img3 from '../assets/pqerequeijao.jpg';

const CardsExpansíveis = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [cardAberto, setCardAberto] = useState(null);

  const toggleCard = (id) => {

    setCardAberto(cardAberto === id ? null : id);
  };

  const handleVerProduto = (event) => {
    event.stopPropagation();
    navigate('/produtos');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const dadosCards = [
    {
      id: 1,
      titulo: t('preparo.cards.c1.title'),
      img: img1,
      descricao: t('preparo.cards.c1.desc')
    },
    {
      id: 2,
      titulo: t('preparo.cards.c2.title'),
      img: img2,
      descricao: t('preparo.cards.c2.desc')
    },
    {
      id: 3,
      titulo: t('preparo.cards.c3.title'),
      img: img3,
      descricao: t('preparo.cards.c3.desc')
    }
  ];

  return (
    <section className="secao-cards">
      <div className="container-cards">
        {dadosCards.map((card) => (
          <div 
            key={card.id} 
            className={`card-expansivel ${cardAberto === card.id ? 'aberto' : ''}`}
            onClick={() => toggleCard(card.id)}
          >
            <div className="card-imagem-container">
              <img src={card.img} alt={card.titulo} />
            </div>
            
            <div className="card-corpo">
              <h3>{card.titulo}</h3>
              
              
              <div className="card-conteudo-oculto">
                <p>{card.descricao}</p>
                <button className="btn-comprar" type="button" onClick={handleVerProduto}>{t('common.viewProduct')}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsExpansíveis;