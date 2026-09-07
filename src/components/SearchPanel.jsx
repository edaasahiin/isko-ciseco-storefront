import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function SearchPanel() {
  const [query, setQuery] = useState('');

  const {
    searchOpen,
    closeSearch,
  } = useCart();

  useEffect(() => {
    if (!searchOpen) {
      setQuery('');
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [searchOpen, closeSearch]);

  const results = useMemo(() => {
    const normalized = query
      .trim()
      .toLowerCase();

    if (!normalized) {
      return products;
    }

    return products.filter((product) => {
      const colourMatch = product.colours.some(
        (colour) =>
          colour
            .toLowerCase()
            .includes(normalized),
      );

      return (
        product.name
          .toLowerCase()
          .includes(normalized) ||
        product.category
          .toLowerCase()
          .includes(normalized) ||
        product.eyebrow
          .toLowerCase()
          .includes(normalized) ||
        colourMatch
      );
    });
  }, [query]);

  if (!searchOpen) {
    return null;
  }

  return (
    <div className="search-layer">
      <button
        className="search-backdrop"
        type="button"
        aria-label="Close search"
        onClick={closeSearch}
      />

      <section
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Product search"
      >
        <div className="search-panel__top">
          <span>Search the collection</span>

          <button
            type="button"
            onClick={closeSearch}
          >
            Close
          </button>
        </div>

        <div className="search-input-wrap">
          <span className="search-icon search-icon--large" />

          <input
            autoFocus
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Try “Napkins”, “Blue” or “Table Textiles”"
          />
        </div>

        <div className="search-results">
          <div className="search-results__label">
            {query
              ? `${results.length} result${
                  results.length === 1 ? '' : 's'
                }`
              : 'Popular products'}
          </div>

          <div className="search-result-grid">
            {results.map((product) => (
              <Link
                className="search-result-card"
                key={product.id}
                to={`/products/${product.slug}`}
                onClick={closeSearch}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <span>
                    {product.category}
                  </span>

                  <strong>
                    {product.name}
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
