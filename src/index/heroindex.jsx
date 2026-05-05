import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      {
        id: 'main',
        src: isMobile ? slidePrincipalMobile : slidePrincipal,
        alt: t('home.hero.slides.mainAlt')
      },
      { id: 'facade', src: slideFachada, alt: t('home.hero.slides.facadeAlt') },
      { id: 'table', src: slideMesa, alt: t('home.hero.slides.tableAlt') },
      {
        id: 'basket',
        src: isMobile ? slideCestaMobile : slideCesta,
        alt: t('home.hero.slides.basketAlt')
      },
    ],
    [isMobile, t]
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
    <section className="hero-carousel" aria-label={t('home.hero.aria')}>
      <div
        className="hero-carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
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
        aria-label={t('home.hero.previous')}
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-carousel-btn hero-carousel-btn-right"
        onClick={goToNextSlide}
        aria-label={t('home.hero.next')}
      >
        ›
      </button>

      <div className="hero-carousel-dots" role="tablist" aria-label={t('home.hero.dots')}>
        {heroSlides.map((slide, index) => (
          <button
            key={`dot-${slide.id}`}
            type="button"
            className={`hero-carousel-dot ${currentSlide === index ? 'is-active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={t('home.hero.goToImage', { index: index + 1 })}
            aria-selected={currentSlide === index}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;