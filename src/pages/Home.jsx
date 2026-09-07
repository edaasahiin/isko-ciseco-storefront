import HeroSlider from '../components/HeroSlider';
import CategoryStrip from '../components/CategoryStrip';
import ProductCarousel from '../components/ProductCarousel';
import PromoBanner from '../components/PromoBanner';
import HospitalityCollections from '../components/HospitalityCollections';
import ColourStory from '../components/ColourStory';
import Newsletter from '../components/Newsletter';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />

      <div className="benefit-strip">
        <span>
          Hospitality focused
        </span>

        <span>
          Multiple colour directions
        </span>

        <span>
          Product enquiry ready
        </span>

        <span>
          Future commerce ready
        </span>
      </div>

      <CategoryStrip />

      <ProductCarousel />

      <PromoBanner />

      <HospitalityCollections />

      <section className="featured-grid-section section-shell">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">
              Shop the collection
            </span>

            <h2>
              Designed for the table.
            </h2>
          </div>

          <p>
            Three essential textile formats with multiple
            size and colour directions.
          </p>
        </div>

        <div className="featured-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <ColourStory />

      <Newsletter />
    </div>
  );
}
