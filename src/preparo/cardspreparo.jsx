import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppPreparo.css';
import img1 from '../assets/pqegoiabada.jpg';
import img2 from '../assets/pqepresunto.png';
import img3 from '../assets/pqerequeijao.jpg';

const CardsExpansíveis = () => {
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
      titulo: "PÃO DE QUEIJO + GOIABADA",
      img: img1,
      descricao: "Um clássico, completamente irresistível! O pão de queijo quentinho combinado com a doçura da goiabada é a combinação perfeita para um lanche delicioso. Simples, rápido e cheio de sabor, é a escolha ideal para qualquer hora do dia."
    },
    {
      id: 2,
      titulo: "PÃO DE QUEIJO DEFUMADO + PRESUNTO E QUEIJO COALHO",
      img: img2,
      descricao: "Uma explosão de sabores! O pão de queijo defumado, com seu sabor marcante, combinado com o presunto e o queijo coalho, cria uma experiência gastronômica única. Perfeito para quem busca um lanche mais robusto e cheio de personalidade, essa combinação é ideal para um café da manhã reforçado ou um lanche da tarde especial."
    },
    {
      id: 3,
      titulo: "PÃO DE QUEIJO + REQUEIJÃO",
      img: img3,
      descricao: "O pão de queijo quentinho combinado com o sabor suave e cremoso do requeijão é uma combinação perfeita para um lanche saboroso e nutritivo. Ideal para quem gosta de sabores clássicos e reconfortantes."
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
                <button className="btn-comprar" type="button" onClick={handleVerProduto}>VER PRODUTO</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsExpansíveis;