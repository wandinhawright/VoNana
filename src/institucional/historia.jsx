import React from 'react';
import './AppInstitucional.css';

const Historia = () => {
  return (
    <section className="historia-section">
      <div className="historia-container">
        <div className="historia-header">
          <h2 className="title-top">PENSOU EM PÃO DE QUEIJO?</h2>
          <h3 className="title-bottom">pensou em vó naná!</h3>
        </div>

        <div className="historia-content">
          <p>
           O aroma do pão de queijo inundava nossas tardes de domingo. Sentávamos todos em volta da mesa para receber a fornada de pão de queijo que fazia nossos olhos brilhar ao ver Vó Naná trazendo aquela iguaria direto do forno a lenha.
          </p>

          <div className="nossa-historia-box">
            <h4>Nossa história:</h4>
            <p>
              A empresa Vó Naná  nasceu com o propósito de perpetuar o legado da matriarca da família
              mineira com a sua tradicional receita de pão de queijo com queijo da canastra. Mais do que um simples
              quitute, é um pedacinho da história de uma família, um símbolo da cultura brasileira e um sabor que 
              une gerações. A cada mordida, celebramos a memória da Vó Naná e nos conectamos com a essência do que
              realmente importa: o amor, a família e a tradição.

            </p>
            <p>
              Mantendo viva nossas tradições mineiras produzimos hoje um pão de queijo premium,  preservando a receita original, utilizando queijo canastra  e matérias primas de qualidade, sem conservantes e  aromatizantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;