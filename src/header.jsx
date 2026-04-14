import  React from 'react';
import logoImg from './assets/logovonana.png'; 

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Lado Esquerdo */}
        <nav style={styles.nav}>
          <a href="#produtos" style={styles.link}>PRODUTOS</a>
          <a href="#receitas" style={styles.link}>RECEITAS</a>
        </nav>

        {/* Centro - O LOGO COM IMAGEM */}
        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            <img src={logoImg} alt="Logo Vó Naná" style={styles.logoImage} />
          </div>
        </div>

        {/* Lado Direito */}
        <nav style={styles.nav}>
          <a href="#historia" style={styles.link}>NOSSA HISTÓRIA</a>
          <a href="#contato" style={styles.link}>CONTATO</a>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eee',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px 20px',
    height: '80px',
  },
  nav: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#444',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1px',
    transition: 'color 0.3s',
  },
  logoContainer: {
    flex: 0,
    textAlign: 'center',
    padding: '0 40px',
  },

  logo: {
    backgroundColor: '#003006',
    padding: '5px 15px 15px 15px', // Ajustei o padding para a imagem respirar
    borderRadius: '0 0 20px 20px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  logoImage: {
    height: '60px', // Controle a altura do seu logo aqui
    width: 'auto',  // Mantém a proporção da imagem
    objectFit: 'contain',
  },
  
  logoTextTop: { fontSize: '10px', fontWeight: 'bold' },
  logoTextBottom: { fontSize: '20px', fontWeight: '900' },
  searchBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  }
};

export default Header;