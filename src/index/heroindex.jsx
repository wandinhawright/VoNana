import React, { useEffect, useMemo, useState } from 'react';
import slideFachada from '../assets/iniciovonana.png';
import slidePrincipal from '../assets/bannerindex1.png';
import slidePrincipalMobile from '../assets/bannerindex1celular.png';
import slideMesa from '../assets/bannerindex.png';
import slideMesaMobile from '../assets/bannerindexcelular.png';
import slideCesta from '../assets/bannerindex2.png';
import slideCestaMobile from '../assets/bannerindex2celular.png';
import '../base/index.css';
import './Appindex.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(media.matches);
    update();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const heroSlides = useMemo(
    () => [
      { src: isMobile ? slidePrincipalMobile : slidePrincipal, alt: 'Imagem principal da VoNana' },
      { src: slideFachada, alt: 'Fachada da loja VoNana' },
      { src: isMobile ? slideMesaMobile : slideMesa, alt: 'Mesa com paes de queijo VoNana' },
      { src: isMobile ? slideCestaMobile : slideCesta, alt: 'Cesta de paes de queijo VoNana' },
    ],
    [isMobile]
  );

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="hero-carousel" aria-label="Galeria de imagens da VoNana">
      <div
        className="hero-carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
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
        {heroSlides.map((slide, index) => (
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