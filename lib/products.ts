export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  details: string[];
  variants?: ProductVariant[];
}

export const products: Product[] = [
  {
    id: 'floor-cleaning',
    name: 'Floor Cleaning Solution',
    description: 'Professional-grade floor disinfectant for all types of surfaces',
    price: 299,
    unit: 'Per Liter',
    image: '/products/floor-cleaning/Lush/1L/lush1L.png',
    category: 'Floor Care',
    details: [
      'Kills 99.9% of germs',
      'Safe for all floor types',
      'Pleasant fragrance',
      'Biodegradable formula'
    ],
    variants: [
      { id: 'fc-lush-500ml', name: 'Lush - 500ml', image: '/products/floor-cleaning/Lush/500ml/lush500ml.png' },
      { id: 'fc-lush-1l', name: 'Lush - 1L', image: '/products/floor-cleaning/Lush/1L/lush1L.png' },
      { id: 'fc-lush-2l', name: 'Lush - 2L', image: '/products/floor-cleaning/Lush/2L/lush2L.png' },
      { id: 'fc-lush-5l', name: 'Lush - 5L', image: '/products/floor-cleaning/Lush/5L/lush5L.png' },
      { id: 'fc-exotic-500ml', name: 'Exotic - 500ml', image: '/products/floor-cleaning/exotic/500ml/exotic500mL.png' },
      { id: 'fc-exotic-1l', name: 'Exotic - 1L', image: '/products/floor-cleaning/exotic/1L/exotic1L.png' },
      { id: 'fc-exotic-2l', name: 'Exotic - 2L', image: '/products/floor-cleaning/exotic/2L/exotic2L.png' },
      { id: 'fc-exotic-5l', name: 'Exotic - 5L', image: '/products/floor-cleaning/exotic/5L/exotic5L.png' },
      { id: 'fc-lemon-500ml', name: 'Lemon - 500ml', image: '/products/floor-cleaning/lemon/500ml/fresh500ml.png' },
      { id: 'fc-lemon-1l', name: 'Lemon - 1L', image: '/products/floor-cleaning/lemon/1L/fresh1L.png' },
      { id: 'fc-lemon-2l', name: 'Lemon - 2L', image: '/products/floor-cleaning/lemon/2L/fresh2L.png' },
      { id: 'fc-lemon-5l', name: 'Lemon - 5L', image: '/products/floor-cleaning/lemon/5L/fresh5L.png' }
    ]
  },
  {
    id: 'glisto',
    name: 'Glisto - Surface Shine',
    description: 'Premium surface shine and polish with disinfectant properties',
    price: 349,
    unit: 'Per Liter',
    image: '/products/glisto/glisto.png',
    category: 'Surface Care',
    details: [
      'Provides shine and protection',
      'Disinfects while polishing',
      'Long-lasting fragrance',
      'Streak-free formula'
    ]
  },
  {
    id: 'hand-wash',
    name: 'Hand Wash',
    description: 'Gentle yet effective antibacterial hand wash for daily use',
    price: 189,
    unit: 'Per Unit',
    image: '/products/hand-wash/blue/250ml/blue250ml.png',
    category: 'Hand Care',
    details: [
      'Kills bacteria and viruses',
      'Dermatologist tested',
      'Moisturizing formula',
      'Suitable for all skin types'
    ],
    variants: [
      { id: 'hw-blue-250', name: 'Blue - 250ml', image: '/products/hand-wash/blue/250ml/blue250ml.png' },
      { id: 'hw-blue-300', name: 'Blue - 300ml', image: '/products/hand-wash/blue/300ml/blue300ml.png' },
      { id: 'hw-green-250', name: 'Green - 250ml', image: '/products/hand-wash/green/300ml/green300Ml.png' },
      { id: 'hw-green-300', name: 'Green - 300ml', image: '/products/hand-wash/green/250ml/green250ml.png' }
    ]
  },
  {
    id: 'harpic',
    name: 'Harpic - Toilet Cleaner',
    description: 'Powerful toilet bowl cleaner with disinfectant action',
    price: 129,
    unit: 'Per Bottle',
    image: '/products/harphic/500ml/harpic500ml.png',
    category: 'Toilet Care',
    details: [
      'Removes tough stains',
      'Kills germs and bacteria',
      'Prevents limescale buildup',
      'Fresh citrus scent'
    ],
    variants: [
      { id: 'harpic-250ml', name: '250ml', image: '/products/harphic/250ml/harpic250ml.png' },
      { id: 'harpic-500ml', name: '500ml', image: '/products/harphic/500ml/harpic500ml.png' }
    ]
  },
  {
    id: 'pheyle',
    name: 'Pheyle - Disinfectant',
    description: 'Multipurpose disinfectant for comprehensive household and commercial cleaning',
    price: 219,
    unit: 'Per Liter',
    image: '/products/pheyle/5L/5L.png',
    category: 'General Disinfection',
    details: [
      'Kills 99.9% pathogens',
      'Use on any surface',
      'Hospital grade formula',
      'Cost-effective solution'
    ],
    variants: [
      { id: 'pheyle-1L', name: '1L', image: '/products/pheyle/1L/1L.png' },
      { id: 'pheyle-5L', name: '5L', image: '/products/pheyle/5L/5L.png' }
    ]
  }
];
