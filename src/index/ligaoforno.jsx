import React from 'react';
import './Appindex.css';
import cestaImg from '../assets/cestadepaodequeijo.png'; 

const LigaForno = () => {
  return (
    <section className="liga-forno-container">
      <div className="liga-forno-content">
        <h2 className="liga-forno-title">LIGA O FORNO, VÓ NANÁ CHEGOU!</h2>
        
        <p className="liga-forno-text">
          Bons mineiros não guardam segredos, não é? Por isso decidimos compartilhar com 
          todos um pouco das nossas tradições, pão de queijo premium quentinho!
        </p>

        <button className="btn-conheca">CONHEÇA NOSSA HISTÓRIA</button>
      </div>

      <img src={cestaImg} alt="Cesta de Pão de Queijo" className="cesta-posicionada" />
    </section>
  );
};

export default LigaForno;