import React from 'react';
import '../base/index.css';
import './Appindex.css';

import { Link } from 'react-router-dom';

const Escolhas = () => {
  return (
    <section className="escolhas-container">
      <Link to="/institucional">
        <button className="btn-escolhas" style={{position: 'absolute',top: '300px',right: '1060px'}}>INSTITUCIONAL</button>
      </Link>
      <Link to="/produtos">
        <button className="btn-escolhas" style={{position: 'absolute',top: '300px',right: '745px'}}>PRODUTOS</button>
      </Link>
      <Link to="/preparo">
        <button className="btn-escolhas" style={{position: 'absolute',top: '300px',right: '390px'}}>COMO PREPARAR</button>
      </Link>
    </section>
  );
};

export default Escolhas;