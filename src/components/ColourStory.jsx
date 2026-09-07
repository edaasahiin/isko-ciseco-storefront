import { Link } from 'react-router-dom';

import colorsImage from '../assets/colors.png';

export default function ColourStory() {
  return (
    <section className="colour-story">
      <div className="colour-story__copy">
        <span className="section-kicker">
          Colour collection
        </span>

        <h2>
          A palette made
          to work with the room.
        </h2>

        <p>
          Build a quieter table with tones that can
          complement interior concepts, service styles and
          hospitality identities.
        </p>

        <div className="colour-list">
          <span>Ecru</span>
          <span>White</span>
          <span>Soft Pink</span>
          <span>Sage</span>
          <span>Blue</span>
        </div>

        <Link
          className="text-link"
          to="/products"
        >
          View colours & formats
          <span>↗</span>
        </Link>
      </div>

      <div className="colour-story__image">
        <img
          src={colorsImage}
          alt="ISKO hospitality colour collection"
        />
      </div>
    </section>
  );
}
