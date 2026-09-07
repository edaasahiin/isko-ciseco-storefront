import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link
            className="footer-brand"
            to="/"
          >
            ISKO
          </Link>

          <p>
            Hospitality table textiles designed around
            product, material and the table experience.
          </p>
        </div>

        <div className="footer-column">
          <span>
            Shop
          </span>

          <Link to="/products">
            All products
          </Link>

          <Link to="/products/napkins">
            Napkins
          </Link>

          <Link to="/products/coasters">
            Coasters
          </Link>

          <Link to="/products/placemats">
            Placemats
          </Link>
        </div>

        <div className="footer-column">
          <span>
            Hospitality
          </span>

          <a href="/#collections">
            Hotels
          </a>

          <a href="/#collections">
            Restaurants & Bars
          </a>

          <a href="/#collections">
            Cruise & Yacht
          </a>
        </div>

        <div className="footer-column">
          <span>
            Enquiries
          </span>

          <a href="/#enquiry">
            Product information
          </a>

          <a href="/#enquiry">
            Request a sample
          </a>

          <a href="/#enquiry">
            Contact
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 ISKO. All rights reserved.
        </span>

        <span>
          Hospitality Table Textiles
        </span>
      </div>
    </footer>
  );
}
