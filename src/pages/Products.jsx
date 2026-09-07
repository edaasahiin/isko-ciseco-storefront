import { useMemo, useState } from 'react';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const filters = [
  'All',
  'Napkins',
  'Coasters',
  'Placemats',
];

export default function Products() {
  const [activeFilter, setActiveFilter] =
    useState('All');

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'All') {
      return products;
    }

    return products.filter(
      (product) =>
        product.name === activeFilter,
    );
  }, [activeFilter]);

  return (
    <div className="products-page">
      <section className="products-hero section-shell">
        <span className="section-kicker">
          The collection
        </span>

        <h1>
          Hospitality
          <br />
          table textiles.
        </h1>

        <p>
          Explore product formats, available sizes and
          colour directions across the ISKO hospitality
          collection.
        </p>
      </section>

      <section className="products-toolbar section-shell">
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={
                filter === activeFilter
                  ? 'filter-button filter-button--active'
                  : 'filter-button'
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <span>
          {visibleProducts.length} product
          {visibleProducts.length === 1 ? '' : 's'}
        </span>
      </section>

      <section className="product-catalog section-shell">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </div>
  );
}
