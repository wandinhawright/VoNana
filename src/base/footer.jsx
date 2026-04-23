import React from 'react';
import './index.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logoImg from '../assets/logovonana.png';

const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logoImg} alt="Logo Vó Naná" className="footer-logo" />
          <p className="footer-description">
            O verdadeiro sabor de Minas na sua mesa. Tradição, qualidade e
            muito carinho em cada pão de queijo.
          </p>
        </div>

        <div className="footer-column">
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Seja um Revendedor</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTATO</h3>
          <div className="footer-socials">
            <a href="https://www.instagram.com/paodequeijovonana/" className="social-icon"><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send/?phone=556196561099&text&type=phone_number&app_absent=0" className="social-icon"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/paodequeijovonana" className="social-icon"><FaFacebook /></a>
            <a href="mailto:vonana@vonana.com.br" className="social-icon"><FaEnvelope /></a>
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