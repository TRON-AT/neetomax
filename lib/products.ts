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
    name: 'NEETOMAX Floor Cleaner',
    description: 'Professional-grade floor disinfectant for all types of surfaces',
    price: 180,
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
      { id: 'fc-lush-500ml', name: 'Lush Lavender - 500ml', image: '/products/floor-cleaning/Lush/500ml/lush500ml.png', price: 105 },
      { id: 'fc-lush-1l', name: 'Lush Lavender - 1L', image: '/products/floor-cleaning/Lush/1L/lush1L.png', price: 180 },
      { id: 'fc-lush-2l', name: 'Lush Lavender - 2L', image: '/products/floor-cleaning/Lush/2L/lush2L.png', price: 330 },
      { id: 'fc-lush-5l', name: 'Lush Lavender - 5L', image: '/products/floor-cleaning/Lush/5L/lush5L.png', price: 699 },
      { id: 'fc-exotic-500ml', name: 'Exotic Floral - 500ml', image: '/products/floor-cleaning/exotic/500ml/exotic500mL.png', price: 105 },
      { id: 'fc-exotic-1l', name: 'Exotic Floral - 1L', image: '/products/floor-cleaning/exotic/1L/exotic1L.png', price: 180 },
      { id: 'fc-exotic-2l', name: 'Exotic Floral - 2L', image: '/products/floor-cleaning/exotic/2L/exotic2L.png', price: 330 },
      { id: 'fc-exotic-5l', name: 'Exotic Floral - 5L', image: '/products/floor-cleaning/exotic/5L/exotic5L.png', price: 699 },
      { id: 'fc-lemon-500ml', name: 'Fresh Lemon - 500ml', image: '/products/floor-cleaning/lemon/500ml/fresh500ml.png', price: 105 },
      { id: 'fc-lemon-1l', name: 'Fresh Lemon - 1L', image: '/products/floor-cleaning/lemon/1L/fresh1L.png', price: 180 },
      { id: 'fc-lemon-2l', name: 'Fresh Lemon - 2L', image: '/products/floor-cleaning/lemon/2L/fresh2L.png', price: 330 },
      { id: 'fc-lemon-5l', name: 'Fresh Lemon - 5L', image: '/products/floor-cleaning/lemon/5L/fresh5L.png', price: 699 }
    ]
  },
  {
    id: 'crysto',
    name: 'Crysto',
    description: 'Premium surface shine and polish with disinfectant properties',
    price: 105,
    unit: 'Per Unit',
    image: '/products/crysto/glass.jpeg',
    category: 'Surface Care',
    details: [
      'Provides shine and protection',
      'Disinfects while polishing',
      'Long-lasting fragrance',
      'Streak-free formula'
    ],
    variants: [
      { id: 'crysto-glass', name: 'Crysto Glass Cleaner - 500ml', image: '/products/crysto/glass.jpeg', price: 105 },
      { id: 'crysto-kitchen', name: 'Crysto Kitchen Cleaner - 500ml', image: '/products/crysto/Kitech.jpeg', price: 130 }
    ]
  },
  {
    id: 'hand-wash',
    name: 'NEETOMAX Handwash',
    description: 'Gentle yet effective antibacterial hand wash for daily use',
    price: 95,
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
      { id: 'hw-neem-250', name: 'Neem Aloevera - 250ml', image: '/products/hand-wash/blue/250ml/blue250ml.png', price: 95 },
      { id: 'hw-neem-300', name: 'Neem Aloevera - 300ml', image: '/products/hand-wash/blue/300ml/blue300ml.png', price: 110 },
      { id: 'hw-lily-250', name: 'Lily Lavender - 250ml', image: '/products/hand-wash/green/300ml/green300Ml.png', price: 99 },
      { id: 'hw-lily-300', name: 'Lily Lavender - 300ml', image: '/products/hand-wash/green/250ml/green250ml.png', price: 115 }
    ]
  },
  {
    id: 'harpic',
    name: 'NEETOMAX Toilet Cleaner',
    description: 'Powerful toilet bowl cleaner with disinfectant action',
    price: 99,
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
      { id: 'harpic-250ml', name: '200ml', image: '/products/harphic/250ml/harpic250ml.png', price: 45 },
      { id: 'harpic-500ml', name: '500ml', image: '/products/harphic/500ml/harpic500ml.png', price: 99 }
    ]
  },
  {
    id: 'phenyl',
    name: 'NEETOMAX White Phenyl',
    description: 'Multipurpose disinfectant for comprehensive household and commercial cleaning',
    price: 75,
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
      { id: 'pheyle-1L', name: 'White Phenyl 1L', image: '/products/pheyle/1L/1L.png', price: 75 },
      { id: 'pheyle-5L', name: 'White Phenyl 5L', image: '/products/pheyle/5L/5L.png', price: 330 }
    ]
  }
];
