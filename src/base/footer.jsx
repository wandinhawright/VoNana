import React from 'react';
import './index.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logovonana.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-site">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logoImg} alt="Logo Vó Naná" className="footer-logo" />
          <p className="footer-description">
            {t('footer.description')}
          </p>
         
        </div>

        <div className="footer-column">
          <h3>{t('footer.navigation')}</h3>
          <ul>
            <li><a href="/">{t('nav.home')}</a></li>
            <li><a href="/revendedor">{t('footer.reseller')}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t('footer.contact')}</h3>
          <div className="footer-socials">
            <a href="https://www.instagram.com/paodequeijovonana/" className="social-icon"><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send/?phone=556196561099&text&type=phone_number&app_absent=0" className="social-icon"><FaWhatsapp /></a>
            <a href="mailto:vonana@vonana.com.br" className="social-icon"><FaEnvelope /></a>
          </div>
          <p>vonana@vonana.com.br</p>
          <p>(61) 9656-1099</p>
          <h3>{t('footer.address')}</h3>
           <p>{t('footer.location')}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Vó Naná - {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;