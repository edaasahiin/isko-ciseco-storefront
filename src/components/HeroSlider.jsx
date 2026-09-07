import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/hero-bar.png';
import hotelImage from '../assets/industry-hotel.png';
import cruiseImage from '../assets/industry-cruise.png';

const slides = [
  {
    eyebrow: 'ISKO Hospitality',
    title: 'Table textiles for every setting.',
    copy:
      'Refined textile formats designed around dining, beverage service and guest experience.',
    image: heroImage,
    accent: 'hero-slide--sage',
  },
  {
    eyebrow: 'Hotels & Restaurants',
    title: 'Build a table with quieter details.',
    copy:
      'A considered collection shaped around colour, proportion and professional hospitality presentation.',
    image: hotelImage,
    accent: 'hero-slide--sand',
  },
  {
    eyebrow: 'Cruise & Yacht',
    title: 'Designed to travel with the experience.',
    copy:
      'Adaptable textile details for refined service across hospitality environments.',
    image: cruiseImage,
    accent: 'hero-slide--blush',
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) =>
        (current + 1) % slides.length,
      );
    }, 6500);

    return () =>
      window.clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActive(index);
  };

  return (
    <section
      className={`commerce-hero ${slides[active].accent}`}
    >
      <div className="hero-copy">
        <span className="hero-kicker">
          {slides[active].eyebrow}
        </span>

        <h1>
          {slides[active].title}
        </h1>

        <p>
          {slides[active].copy}
        </p>

        <div className="hero-actions">
          <Link
            className="button button--dark"
            to="/products"
          >
            Shop collection
            <span>↗</span>
          </Link>

          <a
            className="button button--ghost"
            href="#collections"
          >
            Explore settings
          </a>
        </div>

        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={
                active === index
                  ? 'hero-dot hero-dot--active'
                  : 'hero-dot'
              }
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            >
              <span>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-blob hero-blob--one" />
        <div className="hero-blob hero-blob--two" />
        <div className="hero-outline-shape" />

        <img
          key={slides[active].image}
          src={slides[active].image}
          alt={slides[active].title}
        />

        <div className="hero-visual-card">
          <span>
            Curated for
          </span>

          <strong>
            Hospitality
          </strong>
        </div>
      </div>

      <button
        className="hero-arrow hero-arrow--left"
        type="button"
        aria-label="Previous slide"
        onClick={() =>
          setActive((current) =>
            current === 0
              ? slides.length - 1
              : current - 1,
          )
        }
      >
        ←
      </button>

      <button
        className="hero-arrow hero-arrow--right"
        type="button"
        aria-label="Next slide"
        onClick={() =>
          setActive((current) =>
            (current + 1) % slides.length,
          )
        }
      >
        →
      </button>
    </section>
  );
}
