const fs = require('fs');

// Accurate statistical benchmarks from the 2200-sample Crop Recommendation dataset
const CROP_STATS = {
  rice: {
    N: { mean: 79.89, std: 11.9, min: 60, max: 99 },
    P: { mean: 47.58, std: 7.8, min: 35, max: 60 },
    K: { mean: 39.87, std: 4.9, min: 35, max: 45 },
    temperature: { mean: 23.69, std: 2.3, min: 20.0, max: 27.0 },
    humidity: { mean: 82.27, std: 2.4, min: 80.0, max: 85.0 },
    ph: { mean: 6.43, std: 0.34, min: 5.0, max: 7.8 },
    rainfall: { mean: 236.18, std: 36.6, min: 180.0, max: 300.0 }
  },
  maize: {
    N: { mean: 77.76, std: 11.9, min: 60, max: 100 },
    P: { mean: 48.44, std: 7.9, min: 35, max: 60 },
    K: { mean: 19.79, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 22.39, std: 3.2, min: 18.0, max: 26.5 },
    humidity: { mean: 65.09, std: 5.5, min: 55.0, max: 75.0 },
    ph: { mean: 6.25, std: 0.34, min: 5.5, max: 7.0 },
    rainfall: { mean: 84.77, std: 16.5, min: 60.0, max: 110.0 }
  },
  chickpea: {
    N: { mean: 40.09, std: 11.8, min: 20, max: 60 },
    P: { mean: 67.79, std: 7.8, min: 55, max: 80 },
    K: { mean: 79.92, std: 3.2, min: 75, max: 85 },
    temperature: { mean: 18.87, std: 1.3, min: 17.0, max: 21.0 },
    humidity: { mean: 16.86, std: 1.2, min: 14.0, max: 18.0 },
    ph: { mean: 7.34, std: 0.26, min: 7.0, max: 8.0 },
    rainfall: { mean: 80.05, std: 9.9, min: 65.0, max: 95.0 }
  },
  kidneybeans: {
    N: { mean: 20.75, std: 11.7, min: 0, max: 40 },
    P: { mean: 67.54, std: 7.8, min: 55, max: 80 },
    K: { mean: 20.05, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 20.12, std: 3.1, min: 15.0, max: 25.0 },
    humidity: { mean: 21.61, std: 1.9, min: 18.0, max: 25.0 },
    ph: { mean: 5.75, std: 0.19, min: 5.5, max: 6.0 },
    rainfall: { mean: 105.92, std: 26.9, min: 60.0, max: 150.0 }
  },
  pigeonpeas: {
    N: { mean: 20.73, std: 11.8, min: 0, max: 40 },
    P: { mean: 67.73, std: 7.9, min: 55, max: 80 },
    K: { mean: 20.29, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 27.74, std: 5.7, min: 18.0, max: 37.0 },
    humidity: { mean: 48.06, std: 14.5, min: 30.0, max: 70.0 },
    ph: { mean: 5.79, std: 0.77, min: 4.5, max: 7.5 },
    rainfall: { mean: 149.46, std: 32.8, min: 90.0, max: 200.0 }
  },
  mothbeans: {
    N: { mean: 21.44, std: 11.9, min: 0, max: 40 },
    P: { mean: 48.01, std: 7.8, min: 35, max: 60 },
    K: { mean: 20.23, std: 3.3, min: 15, max: 25 },
    temperature: { mean: 28.19, std: 2.3, min: 24.0, max: 32.0 },
    humidity: { mean: 53.16, std: 7.6, min: 40.0, max: 65.0 },
    ph: { mean: 6.83, std: 1.48, min: 3.5, max: 9.9 },
    rainfall: { mean: 51.20, std: 12.8, min: 30.0, max: 75.0 }
  },
  mungbean: {
    N: { mean: 20.99, std: 11.8, min: 0, max: 40 },
    P: { mean: 47.28, std: 7.9, min: 35, max: 60 },
    K: { mean: 19.87, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 28.53, std: 0.7, min: 27.0, max: 30.0 },
    humidity: { mean: 85.50, std: 3.2, min: 80.0, max: 90.0 },
    ph: { mean: 6.72, std: 0.25, min: 6.2, max: 7.2 },
    rainfall: { mean: 48.40, std: 7.8, min: 35.0, max: 60.0 }
  },
  blackgram: {
    N: { mean: 40.02, std: 11.8, min: 20, max: 60 },
    P: { mean: 67.47, std: 7.9, min: 55, max: 80 },
    K: { mean: 19.24, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 29.98, std: 2.7, min: 25.0, max: 35.0 },
    humidity: { mean: 65.12, std: 3.1, min: 60.0, max: 70.0 },
    ph: { mean: 7.13, std: 0.35, min: 6.5, max: 7.8 },
    rainfall: { mean: 67.88, std: 4.5, min: 60.0, max: 75.0 }
  },
  lentil: {
    N: { mean: 18.77, std: 11.7, min: 0, max: 40 },
    P: { mean: 68.36, std: 7.8, min: 55, max: 80 },
    K: { mean: 19.41, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 24.51, std: 3.4, min: 18.0, max: 30.0 },
    humidity: { mean: 64.80, std: 3.2, min: 60.0, max: 70.0 },
    ph: { mean: 6.93, std: 0.54, min: 5.9, max: 7.8 },
    rainfall: { mean: 45.68, std: 5.8, min: 35.0, max: 55.0 }
  },
  pomegranate: {
    N: { mean: 18.87, std: 11.6, min: 0, max: 40 },
    P: { mean: 18.75, std: 7.8, min: 5, max: 30 },
    K: { mean: 40.21, std: 3.2, min: 35, max: 45 },
    temperature: { mean: 21.84, std: 2.0, min: 18.0, max: 25.0 },
    humidity: { mean: 90.13, std: 3.1, min: 85.0, max: 95.0 },
    ph: { mean: 6.43, std: 0.52, min: 5.5, max: 7.2 },
    rainfall: { mean: 107.53, std: 4.4, min: 100.0, max: 115.0 }
  },
  banana: {
    N: { mean: 100.23, std: 11.8, min: 80, max: 120 },
    P: { mean: 82.01, std: 7.8, min: 70, max: 95 },
    K: { mean: 50.05, std: 3.2, min: 45, max: 55 },
    temperature: { mean: 27.38, std: 1.4, min: 25.0, max: 30.0 },
    humidity: { mean: 80.36, std: 3.1, min: 75.0, max: 85.0 },
    ph: { mean: 5.98, std: 0.31, min: 5.5, max: 6.5 },
    rainfall: { mean: 104.63, std: 9.8, min: 90.0, max: 120.0 }
  },
  mango: {
    N: { mean: 20.07, std: 11.9, min: 0, max: 40 },
    P: { mean: 27.18, std: 7.8, min: 15, max: 40 },
    K: { mean: 29.92, std: 3.2, min: 25, max: 35 },
    temperature: { mean: 31.21, std: 2.5, min: 27.0, max: 36.0 },
    humidity: { mean: 50.16, std: 2.8, min: 45.0, max: 55.0 },
    ph: { mean: 5.77, std: 0.70, min: 4.5, max: 7.0 },
    rainfall: { mean: 94.70, std: 3.3, min: 89.0, max: 100.0 }
  },
  grapes: {
    N: { mean: 23.18, std: 11.6, min: 0, max: 40 },
    P: { mean: 132.53, std: 7.9, min: 120, max: 145 },
    K: { mean: 200.11, std: 3.2, min: 195, max: 205 },
    temperature: { mean: 23.85, std: 9.7, min: 8.0, max: 42.0 },
    humidity: { mean: 81.88, std: 1.1, min: 80.0, max: 84.0 },
    ph: { mean: 6.03, std: 0.31, min: 5.5, max: 6.5 },
    rainfall: { mean: 69.61, std: 3.0, min: 65.0, max: 75.0 }
  },
  watermelon: {
    N: { mean: 99.42, std: 11.8, min: 80, max: 120 },
    P: { mean: 17.00, std: 7.8, min: 5, max: 30 },
    K: { mean: 50.22, std: 3.2, min: 45, max: 55 },
    temperature: { mean: 25.59, std: 0.9, min: 24.0, max: 27.0 },
    humidity: { mean: 85.16, std: 3.0, min: 80.0, max: 90.0 },
    ph: { mean: 6.50, std: 0.31, min: 6.0, max: 7.0 },
    rainfall: { mean: 50.79, std: 6.0, min: 40.0, max: 60.0 }
  },
  muskmelon: {
    N: { mean: 100.32, std: 11.8, min: 80, max: 120 },
    P: { mean: 17.72, std: 7.8, min: 5, max: 30 },
    K: { mean: 50.08, std: 3.2, min: 45, max: 55 },
    temperature: { mean: 28.64, std: 0.9, min: 27.0, max: 30.0 },
    humidity: { mean: 92.34, std: 1.4, min: 90.0, max: 95.0 },
    ph: { mean: 6.36, std: 0.25, min: 6.0, max: 6.8 },
    rainfall: { mean: 24.69, std: 3.0, min: 20.0, max: 30.0 }
  },
  apple: {
    N: { mean: 20.80, std: 11.9, min: 0, max: 40 },
    P: { mean: 134.22, std: 7.8, min: 120, max: 145 },
    K: { mean: 199.89, std: 3.2, min: 195, max: 205 },
    temperature: { mean: 22.63, std: 0.9, min: 21.0, max: 24.0 },
    humidity: { mean: 92.33, std: 1.4, min: 90.0, max: 95.0 },
    ph: { mean: 5.93, std: 0.28, min: 5.5, max: 6.5 },
    rainfall: { mean: 112.65, std: 7.4, min: 100.0, max: 125.0 }
  },
  orange: {
    N: { mean: 19.58, std: 11.8, min: 0, max: 40 },
    P: { mean: 16.55, std: 7.7, min: 5, max: 30 },
    K: { mean: 10.01, std: 3.2, min: 5, max: 15 },
    temperature: { mean: 22.77, std: 6.4, min: 10.0, max: 35.0 },
    humidity: { mean: 92.17, std: 1.4, min: 90.0, max: 95.0 },
    ph: { mean: 7.01, std: 0.60, min: 6.0, max: 8.0 },
    rainfall: { mean: 110.47, std: 5.8, min: 100.0, max: 120.0 }
  },
  papaya: {
    N: { mean: 49.88, std: 11.8, min: 30, max: 70 },
    P: { mean: 59.05, std: 7.8, min: 45, max: 70 },
    K: { mean: 50.04, std: 3.2, min: 45, max: 55 },
    temperature: { mean: 33.72, std: 6.0, min: 23.0, max: 44.0 },
    humidity: { mean: 92.40, std: 1.4, min: 90.0, max: 95.0 },
    ph: { mean: 6.74, std: 0.16, min: 6.5, max: 7.0 },
    rainfall: { mean: 142.63, std: 63.8, min: 40.0, max: 250.0 }
  },
  coconut: {
    N: { mean: 21.98, std: 11.8, min: 0, max: 40 },
    P: { mean: 16.90, std: 7.8, min: 5, max: 30 },
    K: { mean: 30.59, std: 3.2, min: 25, max: 35 },
    temperature: { mean: 27.41, std: 1.4, min: 25.0, max: 30.0 },
    humidity: { mean: 94.84, std: 2.9, min: 90.0, max: 100.0 },
    ph: { mean: 5.98, std: 0.28, min: 5.5, max: 6.5 },
    rainfall: { mean: 175.69, std: 27.9, min: 130.0, max: 225.0 }
  },
  cotton: {
    N: { mean: 117.77, std: 11.8, min: 100, max: 140 },
    P: { mean: 46.24, std: 7.8, min: 35, max: 60 },
    K: { mean: 19.56, std: 3.2, min: 15, max: 25 },
    temperature: { mean: 23.99, std: 1.2, min: 22.0, max: 26.0 },
    humidity: { mean: 79.84, std: 3.2, min: 75.0, max: 85.0 },
    ph: { mean: 6.91, std: 0.60, min: 6.0, max: 8.0 },
    rainfall: { mean: 80.40, std: 12.0, min: 60.0, max: 100.0 }
  },
  jute: {
    N: { mean: 78.40, std: 11.8, min: 60, max: 100 },
    P: { mean: 46.86, std: 7.8, min: 35, max: 60 },
    K: { mean: 39.99, std: 3.2, min: 35, max: 45 },
    temperature: { mean: 24.96, std: 1.2, min: 23.0, max: 27.0 },
    humidity: { mean: 79.64, std: 5.9, min: 70.0, max: 90.0 },
    ph: { mean: 6.73, std: 0.44, min: 6.0, max: 7.5 },
    rainfall: { mean: 174.70, std: 17.5, min: 150.0, max: 200.0 }
  },
  coffee: {
    N: { mean: 101.20, std: 11.8, min: 80, max: 120 },
    P: { mean: 28.77, std: 7.8, min: 15, max: 40 },
    K: { mean: 29.94, std: 3.2, min: 25, max: 35 },
    temperature: { mean: 25.54, std: 1.4, min: 23.0, max: 28.0 },
    humidity: { mean: 58.87, std: 5.5, min: 50.0, max: 70.0 },
    ph: { mean: 6.79, std: 0.52, min: 6.0, max: 7.5 },
    rainfall: { mean: 158.07, std: 26.6, min: 115.0, max: 200.0 }
  }
};

const pyContent = fs.readFileSync('crop_catalog.py', 'utf8');

// Accurate emoji icons mapping for clean UI
const EMOJI_ICONS = {
  rice: '🌾',
  maize: '🌽',
  chickpea: '🫘',
  kidneybeans: '🫘',
  pigeonpeas: '🌿',
  mothbeans: '🌱',
  mungbean: '🟢',
  blackgram: '🫘',
  lentil: '🥣',
  pomegranate: '🍎',
  banana: '🍌',
  mango: '🥭',
  grapes: '🍇',
  watermelon: '🍉',
  muskmelon: '🍈',
  apple: '🍏',
  orange: '🍊',
  papaya: '🍈',
  coconut: '🥥',
  cotton: '☁️',
  jute: '🌾',
  coffee: '☕'
};

const CROP_CATALOG = {};

for (const key of Object.keys(CROP_STATS)) {
  const cropIdx = pyContent.indexOf(`"${key}": {`);
  if (cropIdx !== -1) {
    const endIdx = pyContent.indexOf('},', cropIdx);
    const block = pyContent.substring(cropIdx, endIdx !== -1 ? endIdx + 2 : undefined);

    const getField = (field) => {
      const regex = new RegExp(`"${field}":\\s*"([^"]*)"`);
      const m = block.match(regex);
      return m ? m[1] : '';
    };

    const getList = (field) => {
      const regex = new RegExp(`"${field}":\\s*\\[([^\\]]*)\\]`);
      const m = block.match(regex);
      if (!m) return [];
      return m[1].split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    };

    CROP_CATALOG[key] = {
      key: key,
      name: getField('name') || key.charAt(0).toUpperCase() + key.slice(1),
      scientific_name: getField('scientific_name'),
      category: getField('category') || 'Crop',
      icon: EMOJI_ICONS[key] || '🌱',
      duration_days: getField('duration_days') || '90-120 days',
      sowing_season: getField('sowing_season') || 'Seasonal',
      harvest_season: getField('harvest_season') || 'Seasonal',
      soil_types: getList('soil_types').length ? getList('soil_types') : ['Loamy', 'Alluvial'],
      water_requirement: getField('water_requirement'),
      ideal_temp: getField('ideal_temp').replace(/A/g, '°').replace(/AC/g, '°C'),
      ideal_rainfall: getField('ideal_rainfall'),
      fertilizer_tips: getField('fertilizer_tips'),
      pests_diseases: getField('pests_diseases'),
      economic_value: getField('economic_value'),
      summary: getField('summary'),
      stats: CROP_STATS[key]
    };
  }
}

// Generate the output JS file
const jsContent = `/**
 * Crop Recommendation Dataset Statistics & Agronomic Catalog
 * Auto-generated with 22 crops and benchmark statistical distributions
 */
const CROP_DATA = ${JSON.stringify(CROP_CATALOG, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CROP_DATA };
}
`;

fs.writeFileSync('crop_data.js', jsContent, 'utf8');
console.log('Successfully generated crop_data.js with', Object.keys(CROP_CATALOG).length, 'crops!');

