import React, { useEffect, useState } from 'react';
import slidePrincipal from '../assets/iniciovonana.png';
import slideFachada from '../assets/fachadavonana.png';
import slideMesa from '../assets/mesadepq.png';
import slideCesta from '../assets/cestadepaodequeijo.png';
import '../base/index.css';
import './Appindex.css';

const HERO_SLIDES = [
  { src: slidePrincipal, alt: 'Imagem principal da VoNana' },
  { src: slideFachada, alt: 'Fachada da loja VoNana' },
  { src: slideMesa, alt: 'Mesa com paes de queijo VoNana' },
  { src: slideCesta, alt: 'Cesta de paes de queijo VoNana' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % HERO_SLIDES.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? HERO_SLIDES.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="hero-carousel" aria-label="Galeria de imagens da VoNana">
      <div
        className="hero-carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.alt}
            className="hero-carousel-slide"
            aria-hidden={currentSlide !== index}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-carousel-btn hero-carousel-btn-left"
        onClick={goToPreviousSlide}
        aria-label="Imagem anterior"
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-carousel-btn hero-carousel-btn-right"
        onClick={goToNextSlide}
        aria-label="Proxima imagem"
      >
        ›
      </button>

      <div className="hero-carousel-dots" role="tablist" aria-label="Selecao de slide">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={`dot-${slide.alt}`}
            type="button"
            className={`hero-carousel-dot ${currentSlide === index ? 'is-active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            aria-selected={currentSlide === index}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;