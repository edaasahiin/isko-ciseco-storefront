import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { useCart } from '../context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const {
    cartCount,
    openCart,
    openSearch,
  } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="announcement-bar">
        <span>
          ISKO · Hospitality Table Textiles
        </span>

        <Link to="/products">
          Explore the collection
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <header
        className={`site-header ${
          scrolled ? 'site-header--scrolled' : ''
        }`}
      >
        <div className="header-left">
          <Link className="brand" to="/">
            ISKO
          </Link>

          <nav
            className={`desktop-nav ${
              menuOpen ? 'desktop-nav--open' : ''
            }`}
            aria-label="Primary navigation"
          >
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/products">
              Shop
            </NavLink>

            <a href="/#collections">
              Collections
            </a>

            <a href="/#hospitality">
              Hospitality
            </a>

            <a href="/#enquiry">
              Enquiry
            </a>
          </nav>
        </div>

        <div className="header-actions">
          <button
            className="icon-text-button"
            type="button"
            onClick={openSearch}
          >
            <span className="search-icon" />
            <span className="header-action-label">
              Search
            </span>
          </button>

          <Link
            className="header-shop-link"
            to="/products"
          >
            Shop
          </Link>

          <button
            className="cart-button"
            type="button"
            onClick={openCart}
          >
            Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </button>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/products">
            Shop
          </NavLink>

          <a href="/#collections">
            Collections
          </a>

          <a href="/#hospitality">
            Hospitality
          </a>

          <a href="/#enquiry">
            Enquiry
          </a>

          <button
            type="button"
            onClick={openSearch}
          >
            Search
          </button>

          <button
            type="button"
            onClick={openCart}
          >
            Cart ({cartCount})
          </button>
        </div>
      )}
    </>
  );
}
