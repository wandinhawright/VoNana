import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appindex.css';
import img1 from '../assets/logocomfundo.png';
import img2 from '../assets/revendedorimg.png';
import img3 from '../assets/paodequeijocafe.png';

const Escolhas = () => {
  const navigate = useNavigate();

  const handleSaibaMaisClick = (rota) => {
    navigate(rota);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cards = [
    {
      id: 1,
      img: img1,
      titulo: "SOBRE A EMPRESA",
      texto: "venha conhecer mais sobre a empresa.",
      rota: '/institucional'
    },
    {
      id: 2,
      img: img2,
      titulo: "PRODUTOS",
      texto: "vamos ver o que a vó Naná oferece?",
      rota: '/produtos'
    },
    {
      id: 3,
      img: img3,
      titulo: "DICAS DE CONSUMO",
      texto: "aprenda a preparar refeições deliciosas com nossos produtos.",
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
                  SAIBA MAIS
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