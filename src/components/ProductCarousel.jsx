import ProductCard from './ProductCard';

import { products } from '../data/products';

export default function ProductCarousel() {
  const repeatedProducts = [
    ...products,
    ...products,
  ];

  return (
    <section className="product-carousel-section">
      <div className="section-shell product-carousel-heading">
        <div>
          <span className="section-kicker">
            Selected pieces
          </span>

          <h2>
            Hospitality essentials,
            made considered.
          </h2>
        </div>

        <p>
          Discover textile formats designed to move
          naturally between breakfast, dining, beverage
          and guest-service settings.
        </p>
      </div>

      <div className="product-carousel-viewport">
        <div className="product-carousel-track">
          {repeatedProducts.map((product, index) => (
            <ProductCard
              compact
              key={`${product.id}-${index}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
