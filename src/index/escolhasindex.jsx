import React from 'react';
import '../base/index.css';
import './Appindex.css';

const Escolhas = () => {
  return (
    <section className="escolhas-container">
      <button className="btn-escolhas"style={{position: 'absolute',top: '300px',right: '1060px'}}>INSTITUCIONAL</button>
        <button className="btn-escolhas"style={{position: 'absolute',top: '300px',right: '745px'}}>PRODUTOS</button>
          <button className="btn-escolhas"style={{position: 'absolute',top: '300px',right: '390px'}}>COMO PREPARAR</button>
    </section>
  );
};

export default Escolhas;