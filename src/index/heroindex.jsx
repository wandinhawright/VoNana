import React from 'react';
import paoDeQueijoImg from '../assets/cestadepaodequeijo.png';
import heroimg from '../assets/iniciovonana.png';
import '../base/index.css';
import './Appindex.css';

const Hero = () => {
  return (
    <section style={styles.heroContainer}>
      <div style={styles.greenCard}>   
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
        padding: '0px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
    greenCard: {
        backgroundImage: `url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 30px',
        position: 'relative',
        minHeight: '500px',
    },
  };

export default Hero;