import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const colourMap = {
  Ecru: '#ddd2c0',
  White: '#f8f7f3',
  'Soft Pink': '#d8b8b7',
  Sage: '#9da494',
  Blue: '#8494a5',
};

export default function ProductDetail() {
  const { slug } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.slug === slug,
  );

  const [selectedSize, setSelectedSize] =
    useState('');

  const [
    selectedColour,
    setSelectedColour,
  ] = useState('');

  const [quantity, setQuantity] =
    useState(1);

  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] || '');
    setSelectedColour(
      product?.colours?.[0] || '',
    );
    setQuantity(1);
  }, [product]);

  const relatedProducts = useMemo(
    () =>
      products.filter(
        (item) => item.slug !== slug,
      ),
    [slug],
  );

  if (!product) {
    return (
      <section className="not-found section-shell">
        <span className="section-kicker">
          Product not found
        </span>

        <h1>
          We could not find that product.
        </h1>

        <Link to="/products">
          Return to collection
        </Link>
      </section>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-breadcrumb section-shell">
        <Link to="/">
          Home
        </Link>

        <span>/</span>

        <Link to="/products">
          Products
        </Link>

        <span>/</span>

        <strong>
          {product.name}
        </strong>
      </div>

      <section className="product-detail-main section-shell">
        <div className="product-detail-visual">
          <img
            src={product.image}
            alt={product.name}
          />

          <span className="product-detail-number">
            {product.number}
          </span>

          <div className="product-detail-caption">
            <span>
              ISKO Hospitality
            </span>

            <span>
              {product.category}
            </span>
          </div>
        </div>

        <div className="product-detail-content">
          <span className="section-kicker">
            {product.eyebrow}
          </span>

          <h1>
            {product.name}
          </h1>

          <p className="product-detail-lead">
            {product.description}
          </p>

          <div className="product-selector">
            <div className="selector-heading">
              <span>
                Colour
              </span>

              <strong>
                {selectedColour}
              </strong>
            </div>

            <div className="colour-options">
              {product.colours.map((colour) => (
                <button
                  type="button"
                  key={colour}
                  className={
                    selectedColour === colour
                      ? 'colour-option colour-option--active'
                      : 'colour-option'
                  }
                  aria-label={`Select ${colour}`}
                  aria-pressed={
                    selectedColour === colour
                  }
                  onClick={() =>
                    setSelectedColour(colour)
                  }
                >
                  <span
                    style={{
                      background:
                        colourMap[colour],
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="product-selector">
            <div className="selector-heading">
              <span>
                Size
              </span>

              <strong>
                {selectedSize}
              </strong>
            </div>

            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={
                    selectedSize === size
                      ? 'size-option size-option--active'
                      : 'size-option'
                  }
                  aria-pressed={
                    selectedSize === size
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-selector">
            <div className="selector-heading">
              <span>
                Quantity
              </span>

              <strong>
                {quantity}
              </strong>
            </div>

            <div className="detail-quantity">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1),
                  )
                }
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity(
                    (current) => current + 1,
                  )
                }
              >
                +
              </button>
            </div>
          </div>

          <button
            className="add-cart-button"
            type="button"
            onClick={() =>
              addToCart(
                product,
                selectedSize,
                selectedColour,
                quantity,
              )
            }
          >
            Add to cart
            <span>↗</span>
          </button>

          <a
            className="detail-enquiry-link"
            href="/#enquiry"
          >
            Request product information
            <span>↗</span>
          </a>

          <div className="detail-note">
            Prototype commerce experience. Pricing,
            stock and checkout can be connected later.
          </div>

          <div className="product-detail-facts">
            <details open>
              <summary>
                Product details
              </summary>

              <p>
                {product.shortDescription}
              </p>
            </details>

            <details>
              <summary>
                Available formats
              </summary>

              <p>
                {product.sizes.join(' · ')}
              </p>
            </details>

            <details>
              <summary>
                Available colours
              </summary>

              <p>
                {product.colours.join(' · ')}
              </p>
            </details>

            <details>
              <summary>
                Hospitality applications
              </summary>

              <p>
                Hotels · Restaurants & Bars · Cruise &
                Yacht · Events · Beverage service
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="related-products section-shell">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">
              Continue exploring
            </span>

            <h2>
              Related products.
            </h2>
          </div>
        </div>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
