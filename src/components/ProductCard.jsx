import { Link } from 'react-router-dom';

export default function ProductCard({
  product,
  compact = false,
}) {
  return (
    <Link
      className={`commerce-product-card ${
        compact
          ? 'commerce-product-card--compact'
          : ''
      }`}
      to={`/products/${product.slug}`}
    >
      <div className="commerce-product-image">
        <img
          src={product.image}
          alt={product.name}
        />

        <span className="product-badge">
          {product.badge}
        </span>

        <span className="product-quick">
          View product
          <span>↗</span>
        </span>
      </div>

      <div className="commerce-product-info">
        <span>
          {product.eyebrow}
        </span>

        <div>
          <h3>
            {product.name}
          </h3>

          <p>
            {product.sizes.join(' · ')}
          </p>
        </div>
      </div>
    </Link>
  );
}
