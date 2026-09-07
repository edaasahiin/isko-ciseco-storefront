import { Link } from 'react-router-dom';

import { products } from '../data/products';

export default function CategoryStrip() {
  return (
    <section className="category-strip section-shell">
      <div className="section-heading-row">
        <div>
          <span className="section-kicker">
            Shop by category
          </span>

          <h2>
            Find your table essentials.
          </h2>
        </div>

        <Link to="/products">
          View all
          <span>↗</span>
        </Link>
      </div>

      <div className="category-strip-grid">
        {products.map((product) => (
          <Link
            className="round-category-card"
            key={product.id}
            to={`/products/${product.slug}`}
          >
            <div className="round-category-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div>
              <h3>
                {product.name}
              </h3>

              <p>
                {product.shortDescription}
              </p>
            </div>

            <span className="round-category-arrow">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
