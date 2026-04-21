import React from 'react';
import './index.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logoImg from './assets/logovonana.png'; 

const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        
        {/* Coluna 1: Logo e Info */}
        <div className="footer-column">
          <img src={logoImg} alt="Logo Vó Naná" className="footer-logo" />
          <p className="footer-description">
            O verdadeiro sabor de Minas na sua mesa. Tradição, qualidade e 
            muito carinho em cada pão de queijo.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-column">
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Seja um Revendedor</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato e Redes */}
        <div className="footer-column">
          <h3>CONTATO</h3>
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaWhatsapp /></a>
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaEnvelope /></a>
          </div>
          <p>vonana@vonana.com.br</p>
          <p>(61) 9656-1099</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Vó Naná - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;