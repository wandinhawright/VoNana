import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaRegEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logovonana.png';
import '../index/Appindex.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pt').toLowerCase().split('-')[0];

  const handleLanguageChange = (event) => {
    const next = event.target.value;
    i18n.changeLanguage(next);
    try {
      localStorage.setItem('vonanaLng', next);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={styles.header}>
      <div style={{ ...styles.topBar, ...(isMobile ? styles.topBarMobile : {}) }}>
        <div style={styles.iconContainer}>
          <a
            href="https://api.whatsapp.com/send/?phone=556196561099&text&type=phone_number&app_absent=0"
            style={styles.iconBox}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/paodequeijovonana/"
            style={styles.iconBox}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:vonana@vonana.com.br?subject=Contato%20V%C3%B3%20Nan%C3%A1&body=Ol%C3%A1%2C%0D%0A"
            style={styles.iconBox}
            aria-label="Enviar e-mail para vonana@vonana.com.br"
          >
            <FaRegEnvelope />
          </a>
        </div>

        <div style={styles.langContainer}>
          <select
            value={currentLang}
            onChange={handleLanguageChange}
            style={styles.langSelect}
            aria-label={t('language.label')}
          >
            <option value="pt">{t('language.pt')}</option>
            <option value="en">{t('language.en')}</option>
            <option value="es">{t('language.es')}</option>
          </select>
        </div>
      </div>

      <div style={{ ...styles.mainNav, ...(isMobile ? styles.mainNavMobile : {}) }}>
        {!isMobile && (
          <nav style={styles.navLeft}>
            <Link to="/produtos" style={styles.link}>{t('nav.products')}</Link>
            <Link to="/preparo" style={styles.link}>{t('nav.consumptionTips')}</Link>
          </nav>
        )}

        <div style={{ ...styles.logoBadge, ...(isMobile ? styles.logoBadgeMobile : {}) }}>
          <Link to="/" aria-label={t('header.backHome')} style={styles.logoLink} onClick={closeMenu}>
            <img src={logoImg} alt="Vó Naná" style={{ ...styles.logoImage, ...(isMobile ? styles.logoImageMobile : {}) }} />
          </Link>
        </div>

        {!isMobile && (
          <nav style={styles.navRight}>
            <Link to="/institucional" style={styles.link}>{t('nav.about')}</Link>
            <Link to="/revendedor" style={styles.link}>{t('nav.reseller')}</Link>
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={styles.menuBtn}
            aria-label={t('header.openMenu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <nav style={styles.mobileNav}>
          <Link to="/produtos" style={styles.mobileLink} onClick={closeMenu}>{t('nav.products')}</Link>
          <Link to="/preparo" style={styles.mobileLink} onClick={closeMenu}>{t('nav.consumptionTips')}</Link>
          <Link to="/institucional" style={styles.mobileLink} onClick={closeMenu}>{t('nav.about')}</Link>
          <Link to="/revendedor" style={styles.mobileLink} onClick={closeMenu}>{t('nav.reseller')}</Link>
        </nav>
      )}

      <div style={styles.bottomLine}></div>
    </header>
  );
};

const styles = {
  header: { width: '100%', position: 'relative' },

  topBar: {
    backgroundColor: '#002414',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '50px',
    paddingRight: '50px'
  },
  topBarMobile: { paddingLeft: '16px', paddingRight: '16px' },

  iconContainer: { display: 'flex', gap: '10px' },
  iconBox: {
    backgroundColor: '#FFF5E6',
    color: '#A5692B',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px 10px 0 0',
    fontSize: '20px',
    textDecoration: 'none',
  },

  langContainer: { display: 'flex', alignItems: 'center' },
  langSelect: {
    backgroundColor: '#FFF5E6',
    color: '#A5692B',
    border: 'none',
    height: '35px',
    padding: '0 10px',
    borderRadius: '10px 10px 0 0',
    fontWeight: '700',
    cursor: 'pointer'
  },

  mainNav: {
    backgroundColor: '#00331b',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    position: 'relative',
  },
  mainNavMobile: {
    justifyContent: 'center',
    padding: '0 16px',
    minHeight: '70px',
  },

  navLeft: { display: 'flex', gap: '50px', flex: 1, marginLeft: '200px' },
  navRight: { display: 'flex', gap: '50px', flex: 1, justifyContent: 'flex-end', margin: '0 200px' },

  link: {
    color: '#FFF5E6',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'var(--cooper)',
  },

  logoBadge: {
    backgroundColor: '#002414',
    width: '170px',
    height: '130px',
    borderRadius: '20%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '-30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  logoBadgeMobile: {
    width: '120px',
    height: '90px',
    top: '-12px',
  },

  logoLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
  },
  logoImage: { width: '80%', height: 'auto' },
  logoImageMobile: { width: '76%' },

  menuBtn: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    color: '#FFF5E6',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 12,
  },

  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00331b',
    borderTop: '1px solid rgba(255,245,230,0.2)',
  },
  mobileLink: {
    color: '#FFF5E6',
    textDecoration: 'none',
    padding: '14px 20px',
    fontWeight: '700',
    borderBottom: '1px solid rgba(255,245,230,0.12)',
  },

  bottomLine: { backgroundColor: 'var(--vonanaverde)', height: '5px', width: '100%' },
};

export default Header;