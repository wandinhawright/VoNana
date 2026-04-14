import  React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Lado Esquerdo - Menu */}
        <nav style={styles.nav}>
          <a href="#produtos" style={styles.link}>PRODUTOS</a>
          <a href="#receitas" style={styles.link}>RECEITAS</a>
          <a href="#nossa-historia" style={styles.link}>NOSSA HISTÓRIA</a>
        </nav>

        {/* Centro - Logo (Simulado com texto, mas você pode usar uma tag <img>) */}
        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            <span style={styles.logoTextTop}>VÓ </span>
            <span style={styles.logoTextBottom}>NANÁ</span>
          </div>
        </div>

        {/* Lado Direito - Links Adicionais */}
        <nav style={styles.nav}>
          <a href="#onde-encontrar" style={styles.link}>ONDE ENCONTRAR</a>
          <a href="#contato" style={styles.link}>CONTATO</a>
          <button style={styles.searchBtn}>🔍</button>
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
    backgroundColor: '#d32f2f', // Vermelho característico
    color: 'white',
    padding: '10px 15px',
    borderRadius: '0 0 15px 15px', // Curvinha do logo deles
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1',
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