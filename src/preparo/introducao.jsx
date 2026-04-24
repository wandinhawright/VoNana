import React from 'react';
import './AppPreparo.css';

const Introducao = () => {
  return (
    <section className="preparar-texto-section">
      <div className="preparar-texto-container">
        <h2 className="preparar-texto-title">
          QUER SABER UM SEGREDO?
        </h2>
        
        <div className="preparar-texto-content">
          <p>
            Nosso pão de queijo quentinho com café fica perfeito! Mas você sabia que existem várias outras combinações
            que ficam maravilhosas com nossos produtos? Vamos compartilhar dicas incríveis para você aproveitar ao máximo
            o sabor e a versatilidade do nosso pão de queijo. Desde combinações clássicas até receitas criativas, 
            descubra como transformar cada mordida em uma experiência única. Então se você quiser comer algo diferente
            e expandir os horizontes, separamos algumas receitas e sugestões de consumo para você experimentar.
            Prepare-se para se surpreender e se deliciar!  
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introducao;