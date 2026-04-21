import React from 'react';
import imgPao from '../assets/paodequeijo.jpg';
import imgQueijo from '../assets/queijocanastra.png';
import imgSuporte from '../assets/fotoia.png';
import '../index.css';
import './Appindex.css';

const Features = () => {
  const itens = [
    {
      id: 1,
      titulo: "A tradicional receita mineira",
      texto: "Com ingredientes de alta qualidade!",
      img: imgPao
    },
    {
      id: 2,
      titulo: "Queijos Premium",
      texto: "Com qualidade da Serra da Canastra!",
      img: imgQueijo
    },
    {
      id: 3,
      titulo: "Suporte",
      texto: "Estamos prontos para te atender a qualquer momento.",
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