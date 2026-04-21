import React from 'react';
import paoDeQueijoImg from '../assets/cestadepaodequeijo.png';
import heroimg from '../assets/heroimg.png';
import '../index.css';
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
    textSide: {
        flex: 1,
        zIndex: 2,
    },
    title: {
        color: '#FFFFFF',
        borderColor: '#4ea52b',
        fontSize: '3.5rem',
        fontWeight: '900',
        lineHeight: '1.1',
        textAlign: 'left',
        textTransform: 'uppercase',
        textShadow: '2px 2px 0 rgba(0, 0, 0, 0.45), 6px 8px 14px rgba(0, 0, 0, 0.55)',
        fontFamily: 'sans-serif', 
        
    },
    highlight1: {
        color: 'var(--vonanamarrom)', 
        textShadow: '2px 2px 0 rgba(255, 238, 0, 0.45), 6px 8px 14px rgba(255, 255, 255, 0.55)',
       
    },
    highlight2: {
        color: 'var(--vonanamarrom)', 
        textShadow: '2px 2px 0 rgba(255, 230, 0, 0.45), 6px 8px 14px rgba(255, 255, 255, 0.66)',
       
    },
    imgletterimghighlight: {
        backgroundImage: `radial-gradient(circle at center, var(--vonanaverde-bg), rgba(0, 0, 0, 0.2) 100%)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '400px',
        height: '100px',
        position: 'absolute',
        borderRadius: '50%',
        top: '240px',
        left: '410px',
    }
};

export default Hero;