import { Link } from 'react-router-dom';

import featureImage from '../assets/feature-neutral.png';

export default function PromoBanner() {
  return (
    <section className="promo-banner section-shell">
      <div className="promo-copy">
        <span className="section-kicker">
          Material direction
        </span>

        <h2>
          Texture that belongs
          to the setting.
        </h2>

        <p>
          A softer way to bring material, colour and
          proportion into the hospitality table.
        </p>

        <Link
          className="button button--dark"
          to="/products"
        >
          Discover products
          <span>↗</span>
        </Link>
      </div>

      <div className="promo-image">
        <img
          src={featureImage}
          alt="ISKO textile material direction"
        />

        <div className="promo-floating-card">
          <span>
            ISKO
          </span>

          <strong>
            Hospitality
          </strong>

          <small>
            Table textiles
          </small>
        </div>
      </div>
    </section>
  );
}
