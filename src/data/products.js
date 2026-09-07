import napkinImage from '../assets/product-napkin.png';
import coasterImage from '../assets/product-coaster.png';
import placematImage from '../assets/product-placemat.png';

export const products = [
  {
    id: 1,
    number: '01',
    slug: 'napkins',
    name: 'Napkins',
    category: 'Table Textiles',
    eyebrow: 'Dining essential',
    image: napkinImage,
    shortDescription:
      'Refined textile napkins for distinctive hospitality table settings.',
    description:
      'A versatile textile format developed to complement breakfast, dining, lounge and event environments.',
    sizes: ['20 × 20 cm', '30 × 30 cm'],
    colours: ['Ecru', 'White', 'Soft Pink', 'Sage'],
    badge: 'Signature',
  },
  {
    id: 2,
    number: '02',
    slug: 'coasters',
    name: 'Coasters',
    category: 'Table Textiles',
    eyebrow: 'Beverage service',
    image: coasterImage,
    shortDescription:
      'Compact textile details created around beverage presentation.',
    description:
      'A compact textile format designed for bar, lounge, breakfast and guest-service environments.',
    sizes: ['11 × 11 cm'],
    colours: ['Ecru', 'White', 'Soft Pink', 'Sage', 'Blue'],
    badge: 'Essential',
  },
  {
    id: 3,
    number: '03',
    slug: 'placemats',
    name: 'Placemats',
    category: 'Table Textiles',
    eyebrow: 'Table setting',
    image: placematImage,
    shortDescription:
      'Structured textile surfaces for contemporary hospitality presentation.',
    description:
      'A larger-format textile surface designed to frame individual place settings across hospitality environments.',
    sizes: ['48 × 32 cm'],
    colours: ['Ecru', 'White', 'Soft Pink', 'Sage', 'Blue'],
    badge: 'New',
  },
];
