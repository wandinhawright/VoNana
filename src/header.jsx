import React from 'react';
import { FaWhatsapp, FaInstagram, FaRegEnvelope } from 'react-icons/fa'; // Importando os ícones
import logoImg from './assets/logovonana.png'; 
import BG from './assets/background.png';
import './index.css';
import './index/Appindex.css';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Faixa superior marrom com ícones */}
      <div style={styles.topBar}>
        <div style={styles.iconContainer}>
          <a href="#" style={styles.iconBox}><FaWhatsapp /></a>
          <a href="#" style={styles.iconBox}><FaInstagram /></a>
          <a href="#" style={styles.iconBox}><FaRegEnvelope /></a>
        </div>
      </div>

      {/* Faixa principal com Logo e Menu */}
      <div style={styles.mainNav}>
        <nav style={styles.navLeft}>
          <a href="#" style={styles.link}>PRODUTOS</a>
          <a href="#" style={styles.link}>COMO PREPARAR</a>
        </nav>

        <div style={styles.logoBadge}>
          <img src={logoImg} alt="Vó Naná" style={styles.logoImage} />
        </div>

        <nav style={styles.navRight}>
          <a href="#" style={styles.link}>INSTITUCIONAL</a>
          <a href="#" style={styles.link}>SEJA UM REVENDEDOR</a>
        </nav>
      </div>
      
      {/* Linha verde inferior */}
      <div style={styles.bottomLine}></div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    position: 'relative',
  },
  topBar: {
    backgroundColor: '#002414', // Marrom escuro da imagem
    height: '45px',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: '50px',
  },
  iconContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px', // Faz os ícones "caírem" um pouco para fora se desejar
  },
  iconBox: {
    backgroundColor: '#FFF5E6', // Bege clarinho do fundo do ícone
    color: '#A5692B', // Cor do ícone (verde bem escuro)
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px 10px 0 0', // Arredondado só em cima como na imagem
    fontSize: '20px',
    textDecoration: 'none',
  },
  mainNav: {
    backgroundColor: '#042b19', // Marrom mais claro/alaranjado
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    position: 'relative',
  },
  navLeft: { display: 'flex', gap: '50px', flex: 1, marginLeft: '250px' },
  navRight: { display: 'flex', gap: '50px', flex: 1, justifyContent: 'flex-end', margin: '0 200px' },
  link: {
    color: '#FFF5E6',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  logoBadge: {
    backgroundColor: '#002414', // Fundo verde circular do logo
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
  logoImage: { width: '80%', height: 'auto' },
  bottomLine: {
    backgroundColor: '#006400', // Linha verde grama
    height: '5px',
    width: '100%',
  }
};

export default Header;