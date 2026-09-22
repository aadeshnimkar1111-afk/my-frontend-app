// Placeholder data - admin will add/edit real projects here (or from a CMS later).
// `image` fields are left blank on purpose; real photos can be dropped in per entry.
// `details` powers the full project detail page (/project/:id).
export const PROPERTIES = [
  {
    id: 1,
    name: 'Godrej Ivara',
    developer: 'Godrej Properties',
    priceRange: '₹1.29 Cr - 3.19 Cr',
    minPriceLacs: 129,
    maxPriceLacs: 319,
    areaRange: '729 - 1580 sqft',
    locality: 'Kharadi',
    possession: 'Aug 2032',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 729, price: '₹1.29 Cr' },
      { bhk: '3BHK', sqft: 889, price: '₹1.63 Cr' },
    ],
    details: {
      lat: 18.5515,
      lon: 73.9345,
      about:
        'Godrej Ivara is being developed across a landscaped campus with modern towers, designed for families who want to be close to Kharadi\'s IT hub while staying surrounded by greenery.',
      facts: [
        { label: 'Land Parcel', value: '4.2 acres' },
        { label: 'Towers', value: '3' },
        { label: 'Configuration', value: 'G+24' },
        { label: 'Carpet Area', value: '729 - 1580 sqft' },
        { label: 'RERA No.', value: 'P52100048213' },
        { label: 'Possession Status', value: 'Under Construction' },
        { label: 'Target Possession', value: 'Aug 2032' },
        { label: 'Litigation', value: 'No' },
      ],
      nearby: ['Kharadi IT Park - 1.5km', 'EON Free Zone - 2km', 'Phoenix Mall - 4km'],
      amenities: ['Swimming Pool', 'Club House', 'Kids Play Area', 'Garden', 'Gym', 'Yoga Zone'],
      paymentScheme:
        'Construction Linked Plan - payments are released stage-wise as construction progresses.',
    },
  },
  {
    id: 2,
    name: 'Lodha Sylvan',
    developer: 'Lodha Group',
    priceRange: '₹1.15 Cr - 2.21 Cr',
    minPriceLacs: 115,
    maxPriceLacs: 221,
    areaRange: '836 - 1428 sqft',
    locality: 'Hinjewadi',
    possession: 'Dec 2030',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 836, price: '₹1.15 Cr' },
      { bhk: '2.5BHK', sqft: 955, price: '₹1.45 Cr' },
    ],
    details: {
      lat: 18.5913,
      lon: 73.7389,
      about:
        'Lodha Sylvan sits close to Hinjewadi\'s IT corridor, built around a large central green with resort-style amenities for everyday living.',
      facts: [
        { label: 'Land Parcel', value: '3.6 acres' },
        { label: 'Towers', value: '2' },
        { label: 'Configuration', value: 'G+20' },
        { label: 'Carpet Area', value: '836 - 1428 sqft' },
        { label: 'RERA No.', value: 'P52100039876' },
        { label: 'Possession Status', value: 'Under Construction' },
        { label: 'Target Possession', value: 'Dec 2030' },
        { label: 'Litigation', value: 'No' },
      ],
      nearby: ['Hinjewadi Phase 1 - 2km', 'Wakad Bridge - 3km', 'D-Mart - 1.8km'],
      amenities: ['Swimming Pool', 'Club House', 'Garden', 'Multi Purpose Court', 'Gym'],
      paymentScheme:
        'Construction Linked Plan - payments are released stage-wise as construction progresses.',
    },
  },
  {
    id: 3,
    name: 'Kolte Patil Echoes',
    developer: 'Kolte Patil Developers',
    priceRange: '₹85.00 Lacs - 1.06 Cr',
    minPriceLacs: 85,
    maxPriceLacs: 106,
    areaRange: '838 - 1086 sqft',
    locality: 'Punawale',
    possession: 'Dec 2029',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 838, price: '₹85.00 Lac' },
      { bhk: '2BHK', sqft: 840, price: '₹85.00 Lac' },
    ],
    details: {
      lat: 18.6489,
      lon: 73.7402,
      about:
        'Kolte Patil Echoes offers compact, well-planned 2BHK homes in Punawale with everyday conveniences within walking distance.',
      facts: [
        { label: 'Land Parcel', value: '2.1 acres' },
        { label: 'Towers', value: '2' },
        { label: 'Configuration', value: 'G+18' },
        { label: 'Carpet Area', value: '838 - 1086 sqft' },
        { label: 'RERA No.', value: 'P52100051290' },
        { label: 'Possession Status', value: 'Under Construction' },
        { label: 'Target Possession', value: 'Dec 2029' },
        { label: 'Litigation', value: 'No' },
      ],
      nearby: ['Punawale Chowk - 1km', 'Xion Mall - 3.5km'],
      amenities: ['Swimming Pool', 'Kids Play Area', 'Garden', 'Indoor Games'],
      paymentScheme:
        'Construction Linked Plan - payments are released stage-wise as construction progresses.',
    },
  },
  {
    id: 4,
    name: 'Shapoorji Parkwest',
    developer: 'Shapoorji Pallonji',
    priceRange: '₹91.00 Lacs - 1.8 Cr',
    minPriceLacs: 91,
    maxPriceLacs: 180,
    areaRange: '650 - 1250 sqft',
    locality: 'Hinjewadi',
    possession: 'Mar 2031',
    image: null,
    units: [
      { bhk: '1BHK', sqft: 650, price: '₹91.00 Lac' },
      { bhk: '2BHK', sqft: 920, price: '₹1.25 Cr' },
    ],
    details: {
      lat: 18.5989,
      lon: 73.7529,
      about:
        'Shapoorji Parkwest brings a mix of 1BHK and 2BHK homes to Hinjewadi, built around a large park with a focus on open, green living.',
      facts: [
        { label: 'Land Parcel', value: '5 acres' },
        { label: 'Towers', value: '4' },
        { label: 'Configuration', value: 'G+22' },
        { label: 'Carpet Area', value: '650 - 1250 sqft' },
        { label: 'RERA No.', value: 'P52100044521' },
        { label: 'Possession Status', value: 'Under Construction' },
        { label: 'Target Possession', value: 'Mar 2031' },
        { label: 'Litigation', value: 'No' },
      ],
      nearby: ['Hinjewadi Phase 2 - 1.5km', 'Rajiv Gandhi Infotech Park - 2.5km'],
      amenities: ['Swimming Pool', 'Club House', 'Kids Pool', 'Open Gym', 'Badminton Court'],
      paymentScheme:
        'Construction Linked Plan - payments are released stage-wise as construction progresses.',
    },
  },
]

// Brand-level stats shown on every project detail page sidebar.
export const COMPANY_STATS = [
  { label: 'Experience', value: '9+ Years' },
  { label: 'Site Visit Done', value: '1.2 Lacs+' },
  { label: 'Happy Home Buyers', value: '8,500+' },
  { label: 'Worth Home Sold', value: '8000 Cr+' },
  { label: 'Team Size', value: '440+' },
]
