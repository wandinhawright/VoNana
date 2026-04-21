import React from 'react';
import './Appindex.css';
import { FaInstagram } from 'react-icons/fa'; 
import logoImg from '../assets/logocomfundo.png';
import IG1 from '../assets/IG1.png';
import IG2 from '../assets/IG2.png';
import IG3 from '../assets/IG3.png';
import IG4 from '../assets/IG4.png';
import IG5 from '../assets/IG5.png';
import IG6 from '../assets/IG6.png';
import IG7 from '../assets/IG7.png';
import IG8 from '../assets/IG8.png';


const InstagramFeed = () => {
  
  const posts = [
    { id: 1, url: IG1, link: 'https://www.instagram.com/p/Cwa7oU2PhUT/' },
    { id: 2, url: IG2, link: 'https://www.instagram.com/p/Cwa7cq9Pf2G/' },
    { id: 3, url: IG3, link: 'https://www.instagram.com/p/Cwa7JNLvZS4/' },
    { id: 4, url: IG4, link: 'https://www.instagram.com/p/DQhpXYbgbMI/?img_index=1' },
    { id: 5, url: IG5, link: 'https://www.instagram.com/p/DQfA8VED19s/' },
    { id: 6, url: IG6, link: 'https://www.instagram.com/p/DQaFtK7gZER/' },
    { id: 7, url: IG7, link: 'https://www.instagram.com/p/DQU00_CgbUY/' },
    { id: 8, url: IG8, link: 'https://www.instagram.com/p/DQPy7rdknDV/' },
  ];

  return (
    <section className="insta-section">
      <div className="insta-header-text">
        <h2>SIGA A VÓ NANÁ NAS REDES SOCIAIS</h2>
        <p>INSTAGRAM</p>
      </div>

      <div className="insta-container">
        <div className="profile-header">
          <a
            className="profile-img-wrapper"
            href="https://www.instagram.com/paodequeijovonana/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram da Vó Naná"
          >
            <img src={logoImg} alt="Logo" className="profile-avatar" />
            <div className="profile-overlay">
              <FaInstagram />
            </div>
          </a>
          <div className="profile-info">
            <span className="profile-name">vonana_oficial</span>
            <p className="profile-bio">Receitas de Família e Muita Paixão! 🧀❤️ #VóNaná #PãodeQueijo</p>
          </div>
        </div>

        <div className="insta-grid">
          {posts.map(post => (
            <a key={post.id} href={post.link} target="_blank" rel="noreferrer" className="grid-item">
              <img src={post.url} alt="Post" />
              <div className="grid-overlay">
                <FaInstagram />
              </div>
            </a>
          ))}
        </div>
    <div className="insta-footer-buttons">
        <a
          className="btn-follow"
          href="https://www.instagram.com/paodequeijovonana/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram da Vó Naná"
        >
          <FaInstagram /> Seguir no Instagram
        </a>
      </div>
      </div>
    </section>
  );
};

export default InstagramFeed;