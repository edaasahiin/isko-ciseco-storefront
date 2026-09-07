import hotelImage from '../assets/industry-hotel.png';
import restaurantImage from '../assets/industry-restaurant.png';
import cruiseImage from '../assets/industry-cruise.png';

const collections = [
  {
    title: 'Hotels',
    copy: 'Breakfast · lounge · in-room dining',
    image: hotelImage,
  },
  {
    title: 'Restaurants & Bars',
    copy: 'Dining · beverage service · events',
    image: restaurantImage,
  },
  {
    title: 'Cruise & Yacht',
    copy: 'Deck service · dining · guest experience',
    image: cruiseImage,
  },
];

export default function HospitalityCollections() {
  return (
    <section
      className="hospitality-section section-shell"
      id="collections"
    >
      <div className="section-heading-row">
        <div>
          <span className="section-kicker">
            Hospitality collections
          </span>

          <h2>
            Made for every setting.
          </h2>
        </div>

        <p>
          A flexible textile collection shaped around
          hospitality environments rather than a single
          table style.
        </p>
      </div>

      <div
        className="hospitality-grid"
        id="hospitality"
      >
        {collections.map((collection, index) => (
          <article
            className="hospitality-card"
            key={collection.title}
          >
            <div className="hospitality-card__image">
              <img
                src={collection.image}
                alt={collection.title}
              />

              <span>
                0{index + 1}
              </span>
            </div>

            <h3>
              {collection.title}
            </h3>

            <p>
              {collection.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
