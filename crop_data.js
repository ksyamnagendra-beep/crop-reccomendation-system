/**
 * Crop Recommendation Dataset Statistics & Agronomic Catalog
 * Auto-generated with 22 crops and benchmark statistical distributions
 */
const CROP_DATA = {
  "rice": {
    "key": "rice",
    "name": "Rice (Paddy)",
    "scientific_name": "Oryza sativa",
    "category": "Cereal",
    "icon": "🌾",
    "duration_days": "120 - 150 days",
    "sowing_season": "Kharif (June - July)",
    "harvest_season": "October - November",
    "soil_types": [
      "Clayey Loam",
      "Alluvial",
      "Silty Clay"
    ],
    "water_requirement": "High (Flooded / continuous submergence 5-10 cm)",
    "ideal_temp": "20°C - 35°C",
    "ideal_rainfall": "150 - 300 mm (High)",
    "fertilizer_tips": "Split application of Nitrogen (Basal, Tillering, Panicle initiation). Requires adequate P & K for stem strength.",
    "pests_diseases": "Stem borer, Brown planthopper, Blast, Bacterial leaf blight.",
    "economic_value": "Staple food crop feeding over 50% of world population. High domestic & export market demand.",
    "summary": "Rice thrives in warm, humid conditions with abundant water availability and heavy, moisture-retaining soils.",
    "stats": {
      "N": {
        "mean": 79.89,
        "std": 11.9,
        "min": 60,
        "max": 99
      },
      "P": {
        "mean": 47.58,
        "std": 7.8,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 39.87,
        "std": 4.9,
        "min": 35,
        "max": 45
      },
      "temperature": {
        "mean": 23.69,
        "std": 2.3,
        "min": 20,
        "max": 27
      },
      "humidity": {
        "mean": 82.27,
        "std": 2.4,
        "min": 80,
        "max": 85
      },
      "ph": {
        "mean": 6.43,
        "std": 0.34,
        "min": 5,
        "max": 7.8
      },
      "rainfall": {
        "mean": 236.18,
        "std": 36.6,
        "min": 180,
        "max": 300
      }
    }
  },
  "maize": {
    "key": "maize",
    "name": "Maize (Corn)",
    "scientific_name": "Zea mays",
    "category": "Cereal",
    "icon": "🌽",
    "duration_days": "90 - 120 days",
    "sowing_season": "Kharif / Rabi (June - July & Oct - Nov)",
    "harvest_season": "September - October / March - April",
    "soil_types": [
      "Deep Well-drained Loam",
      "Silt Loam"
    ],
    "water_requirement": "Moderate (500 - 800 mm overall, sensitive to waterlogging)",
    "ideal_temp": "18°C - 27°C",
    "ideal_rainfall": "60 - 100 mm",
    "fertilizer_tips": "Heavy feeder of Nitrogen. Apply ZnSO4 to prevent Khaira disease. Well-balanced NPK is crucial.",
    "pests_diseases": "Fall Armyworm, Stem borer, Downy mildew.",
    "economic_value": "Multi-utility crop for human consumption, livestock feed, biofuel, starch and corn syrup industry.",
    "summary": "Queen of cereals, adaptable across various climates, needing warm sunny weather and good soil drainage.",
    "stats": {
      "N": {
        "mean": 77.76,
        "std": 11.9,
        "min": 60,
        "max": 100
      },
      "P": {
        "mean": 48.44,
        "std": 7.9,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 19.79,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 22.39,
        "std": 3.2,
        "min": 18,
        "max": 26.5
      },
      "humidity": {
        "mean": 65.09,
        "std": 5.5,
        "min": 55,
        "max": 75
      },
      "ph": {
        "mean": 6.25,
        "std": 0.34,
        "min": 5.5,
        "max": 7
      },
      "rainfall": {
        "mean": 84.77,
        "std": 16.5,
        "min": 60,
        "max": 110
      }
    }
  },
  "chickpea": {
    "key": "chickpea",
    "name": "Chickpea (Gram)",
    "scientific_name": "Cicer arietinum",
    "category": "Pulse",
    "icon": "🫘",
    "duration_days": "90 - 110 days",
    "sowing_season": "Rabi (October - November)",
    "harvest_season": "February - March",
    "soil_types": [
      "Sandy Loam",
      "Deep Black Cotton Soils"
    ],
    "water_requirement": "Low (Requires residual moisture, 1-2 supplemental irrigations)",
    "ideal_temp": "15°C - 25°C",
    "ideal_rainfall": "60 - 90 mm",
    "fertilizer_tips": "Biological nitrogen fixer. Requires low initial N, but benefits from Phosphorus (DAP) and Rhizobium inoculation.",
    "pests_diseases": "Pod borer (Helicoverpa armigera), Fusarium wilt, Ascochyta blight.",
    "economic_value": "Major pulse protein source, high commercial market price, improves soil fertility through nitrogen fixation.",
    "summary": "Cool-season legume that excels in well-drained, neutral to slightly alkaline soils with moderate residual moisture.",
    "stats": {
      "N": {
        "mean": 40.09,
        "std": 11.8,
        "min": 20,
        "max": 60
      },
      "P": {
        "mean": 67.79,
        "std": 7.8,
        "min": 55,
        "max": 80
      },
      "K": {
        "mean": 79.92,
        "std": 3.2,
        "min": 75,
        "max": 85
      },
      "temperature": {
        "mean": 18.87,
        "std": 1.3,
        "min": 17,
        "max": 21
      },
      "humidity": {
        "mean": 16.86,
        "std": 1.2,
        "min": 14,
        "max": 18
      },
      "ph": {
        "mean": 7.34,
        "std": 0.26,
        "min": 7,
        "max": 8
      },
      "rainfall": {
        "mean": 80.05,
        "std": 9.9,
        "min": 65,
        "max": 95
      }
    }
  },
  "kidneybeans": {
    "key": "kidneybeans",
    "name": "Kidney Beans (Rajma)",
    "scientific_name": "Phaseolus vulgaris",
    "category": "Pulse",
    "icon": "🫘",
    "duration_days": "100 - 120 days",
    "sowing_season": "Spring / Kharif in hills, Late Kharif in plains",
    "harvest_season": "October - November / May",
    "soil_types": [
      "Rich Loamy Soil",
      "Alluvial",
      "High Organic Matter"
    ],
    "water_requirement": "Moderate (Sensitive to drought during flowering and pod development)",
    "ideal_temp": "15°C - 25°C",
    "ideal_rainfall": "60 - 150 mm",
    "fertilizer_tips": "Unlike other pulses, lacks native nodulation in many soils, requiring higher upfront Nitrogen application (100-120 kg N/ha).",
    "pests_diseases": "Bean anthracnose, Rust, Aphids, Whiteflies.",
    "economic_value": "Premium gourmet pulse with high urban retail value and export potential.",
    "summary": "Requires mild temperatures, rich organic soil, and steady moisture without root water stagnation.",
    "stats": {
      "N": {
        "mean": 20.75,
        "std": 11.7,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 67.54,
        "std": 7.8,
        "min": 55,
        "max": 80
      },
      "K": {
        "mean": 20.05,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 20.12,
        "std": 3.1,
        "min": 15,
        "max": 25
      },
      "humidity": {
        "mean": 21.61,
        "std": 1.9,
        "min": 18,
        "max": 25
      },
      "ph": {
        "mean": 5.75,
        "std": 0.19,
        "min": 5.5,
        "max": 6
      },
      "rainfall": {
        "mean": 105.92,
        "std": 26.9,
        "min": 60,
        "max": 150
      }
    }
  },
  "pigeonpeas": {
    "key": "pigeonpeas",
    "name": "Pigeon Peas (Tur / Arhar)",
    "scientific_name": "Cajanus cajan",
    "category": "Pulse",
    "icon": "🌿",
    "duration_days": "150 - 200 days",
    "sowing_season": "Kharif (June - July)",
    "harvest_season": "December - February",
    "soil_types": [
      "Deep Well-drained Loamy & Black Soils"
    ],
    "water_requirement": "Low to Moderate (Deep taproot system imparts drought tolerance)",
    "ideal_temp": "20°C - 35°C",
    "ideal_rainfall": "90 - 200 mm",
    "fertilizer_tips": "Apply 20-25 kg N and 50 kg P2O5 per hectare. Responsive to Sulfur and Zinc fertilization.",
    "pests_diseases": "Pod borer, Sterility mosaic disease, Wilt.",
    "economic_value": "Key constituent of daily protein diet (Dal) with consistent national demand and stable market pricing.",
    "summary": "Hardy legume with extensive deep root systems, tolerates semi-arid droughts and restores depleted soils.",
    "stats": {
      "N": {
        "mean": 20.73,
        "std": 11.8,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 67.73,
        "std": 7.9,
        "min": 55,
        "max": 80
      },
      "K": {
        "mean": 20.29,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 27.74,
        "std": 5.7,
        "min": 18,
        "max": 37
      },
      "humidity": {
        "mean": 48.06,
        "std": 14.5,
        "min": 30,
        "max": 70
      },
      "ph": {
        "mean": 5.79,
        "std": 0.77,
        "min": 4.5,
        "max": 7.5
      },
      "rainfall": {
        "mean": 149.46,
        "std": 32.8,
        "min": 90,
        "max": 200
      }
    }
  },
  "mothbeans": {
    "key": "mothbeans",
    "name": "Moth Beans (Matki)",
    "scientific_name": "Vigna aconitifolia",
    "category": "Pulse",
    "icon": "🌱",
    "duration_days": "75 - 90 days",
    "sowing_season": "Kharif (July - August)",
    "harvest_season": "October - November",
    "soil_types": [
      "Sandy",
      "Light Arid Soils"
    ],
    "water_requirement": "Very Low (One of the most drought-resilient legumes known)",
    "ideal_temp": "24°C - 32°C",
    "ideal_rainfall": "30 - 75 mm",
    "fertilizer_tips": "Minimal input requirements. Low N requirement, response to 20-30 kg P2O5/ha.",
    "pests_diseases": "Yellow mosaic virus, Jassids, Powdery mildew.",
    "economic_value": "Widely consumed in arid regions, used in savory snacks (namkeen, bhujia) and nutritious sprouts.",
    "summary": "Extremely drought-tolerant pulse ideally tailored for arid and desert zones with low rainfall.",
    "stats": {
      "N": {
        "mean": 21.44,
        "std": 11.9,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 48.01,
        "std": 7.8,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 20.23,
        "std": 3.3,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 28.19,
        "std": 2.3,
        "min": 24,
        "max": 32
      },
      "humidity": {
        "mean": 53.16,
        "std": 7.6,
        "min": 40,
        "max": 65
      },
      "ph": {
        "mean": 6.83,
        "std": 1.48,
        "min": 3.5,
        "max": 9.9
      },
      "rainfall": {
        "mean": 51.2,
        "std": 12.8,
        "min": 30,
        "max": 75
      }
    }
  },
  "mungbean": {
    "key": "mungbean",
    "name": "Mung Bean (Green Gram)",
    "scientific_name": "Vigna radiata",
    "category": "Pulse",
    "icon": "🟢",
    "duration_days": "60 - 75 days",
    "sowing_season": "Kharif (June-July), Zaid (March-April)",
    "harvest_season": "August - September / May - June",
    "soil_types": [
      "Fertile Loamy Sand",
      "Alluvial",
      "Well-drained Loam"
    ],
    "water_requirement": "Low to Moderate (Sensitive to waterlogging, needs 2-3 irrigations in summer)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "40 - 60 mm",
    "fertilizer_tips": "Basal application of 15-20 kg N and 40 kg P2O5/ha. Seed inoculation with Rhizobium culture is recommended.",
    "pests_diseases": "Yellow mosaic virus (transmitted by whitefly), Pod borer, Cercospora leaf spot.",
    "economic_value": "Short duration cash turnaround; excellent catch crop in rice-wheat rotations.",
    "summary": "Fast-maturing, nutrient-dense pulse ideal for quick rotational cultivation between major seasons.",
    "stats": {
      "N": {
        "mean": 20.99,
        "std": 11.8,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 47.28,
        "std": 7.9,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 19.87,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 28.53,
        "std": 0.7,
        "min": 27,
        "max": 30
      },
      "humidity": {
        "mean": 85.5,
        "std": 3.2,
        "min": 80,
        "max": 90
      },
      "ph": {
        "mean": 6.72,
        "std": 0.25,
        "min": 6.2,
        "max": 7.2
      },
      "rainfall": {
        "mean": 48.4,
        "std": 7.8,
        "min": 35,
        "max": 60
      }
    }
  },
  "blackgram": {
    "key": "blackgram",
    "name": "Black Gram (Urad)",
    "scientific_name": "Vigna mungo",
    "category": "Pulse",
    "icon": "🫘",
    "duration_days": "70 - 90 days",
    "sowing_season": "Kharif (June - July) & Summer (Feb - March)",
    "harvest_season": "September - October / May",
    "soil_types": [
      "Heavy Loamy",
      "Black Cotton Soil",
      "Alluvial"
    ],
    "water_requirement": "Moderate (Needs warm climate and moist soil during initial vegetative stage)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "60 - 80 mm",
    "fertilizer_tips": "Requires 20 kg N and 40 kg P2O5/ha. Spray 2% DAP at flower initiation to boost yield.",
    "pests_diseases": "Stem rot, Yellow mosaic, Whiteflies, Aphids.",
    "economic_value": "Essential for culinary batters (Idli, Dosa, Vada) and papad manufacturing. Consistently high demand.",
    "summary": "Rich in phosphoric acid and plant protein, thriving under warm humid weather and moisture-holding soils.",
    "stats": {
      "N": {
        "mean": 40.02,
        "std": 11.8,
        "min": 20,
        "max": 60
      },
      "P": {
        "mean": 67.47,
        "std": 7.9,
        "min": 55,
        "max": 80
      },
      "K": {
        "mean": 19.24,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 29.98,
        "std": 2.7,
        "min": 25,
        "max": 35
      },
      "humidity": {
        "mean": 65.12,
        "std": 3.1,
        "min": 60,
        "max": 70
      },
      "ph": {
        "mean": 7.13,
        "std": 0.35,
        "min": 6.5,
        "max": 7.8
      },
      "rainfall": {
        "mean": 67.88,
        "std": 4.5,
        "min": 60,
        "max": 75
      }
    }
  },
  "lentil": {
    "key": "lentil",
    "name": "Lentil (Masoor)",
    "scientific_name": "Lens culinaris",
    "category": "Pulse",
    "icon": "🥣",
    "duration_days": "110 - 130 days",
    "sowing_season": "Rabi (October - November)",
    "harvest_season": "February - March",
    "soil_types": [
      "Sandy Loam",
      "Clay Loam",
      "Alluvial"
    ],
    "water_requirement": "Low (Sensitive to waterlogging, requires light irrigation at branching and pod formation)",
    "ideal_temp": "15°C - 25°C",
    "ideal_rainfall": "40 - 60 mm",
    "fertilizer_tips": "20 kg N, 40 kg P2O5, and 20 kg S/ha. Sulfur application significantly increases protein content.",
    "pests_diseases": "Rust, Wilt, Aphids, Cutworms.",
    "economic_value": "Highly digestible pulse with high protein and micronutrient content. Stable market price.",
    "summary": "Cool-season legume resilient to cold and moderate drought, requiring well-drained fertile soils.",
    "stats": {
      "N": {
        "mean": 18.77,
        "std": 11.7,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 68.36,
        "std": 7.8,
        "min": 55,
        "max": 80
      },
      "K": {
        "mean": 19.41,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 24.51,
        "std": 3.4,
        "min": 18,
        "max": 30
      },
      "humidity": {
        "mean": 64.8,
        "std": 3.2,
        "min": 60,
        "max": 70
      },
      "ph": {
        "mean": 6.93,
        "std": 0.54,
        "min": 5.9,
        "max": 7.8
      },
      "rainfall": {
        "mean": 45.68,
        "std": 5.8,
        "min": 35,
        "max": 55
      }
    }
  },
  "pomegranate": {
    "key": "pomegranate",
    "name": "Pomegranate",
    "scientific_name": "Punica granatum",
    "category": "Fruit",
    "icon": "🍎",
    "duration_days": "Perennial (Bearing in 2-3 years, fruit maturity 150-180 days)",
    "sowing_season": "Monsoon planting (June - August)",
    "harvest_season": "Multiple bahars: Mrig (Nov-Jan), Hasta (Feb-Apr), Ambe (Jul-Sep)",
    "soil_types": [
      "Deep Well-drained Loamy to Light Sandy Soils"
    ],
    "water_requirement": "Moderate (Drip irrigation recommended; sensitive to moisture fluctuations causing fruit cracking)",
    "ideal_temp": "20°C - 35°C",
    "ideal_rainfall": "100 - 120 mm",
    "fertilizer_tips": "Heavy feeder of FYM (Farm Yard Manure), balanced NPK, with foliar Boron and Calcium to prevent fruit cracking.",
    "pests_diseases": "Bacterial blight (Telya), Fruit borer (Dudorix isocrates), Wilt.",
    "economic_value": "High commercial profitability, great export demand to European and Middle Eastern markets.",
    "summary": "High-value arid and semi-arid fruit with long shelf life and high therapeutic antioxidant value.",
    "stats": {
      "N": {
        "mean": 18.87,
        "std": 11.6,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 18.75,
        "std": 7.8,
        "min": 5,
        "max": 30
      },
      "K": {
        "mean": 40.21,
        "std": 3.2,
        "min": 35,
        "max": 45
      },
      "temperature": {
        "mean": 21.84,
        "std": 2,
        "min": 18,
        "max": 25
      },
      "humidity": {
        "mean": 90.13,
        "std": 3.1,
        "min": 85,
        "max": 95
      },
      "ph": {
        "mean": 6.43,
        "std": 0.52,
        "min": 5.5,
        "max": 7.2
      },
      "rainfall": {
        "mean": 107.53,
        "std": 4.4,
        "min": 100,
        "max": 115
      }
    }
  },
  "banana": {
    "key": "banana",
    "name": "Banana",
    "scientific_name": "Musa acuminata",
    "category": "Fruit",
    "icon": "🍌",
    "duration_days": "11 - 13 months",
    "sowing_season": "Year-round (Best: June - July or Oct - Nov)",
    "harvest_season": "11-12 months after sucker / tissue culture planting",
    "soil_types": [
      "Deep Rich Loamy Soil",
      "Well-drained Alluvial Soil"
    ],
    "water_requirement": "Very High (Needs 1500 - 2000 mm annually, ideal with drip fertigation)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "90 - 120 mm (supplemented by irrigation)",
    "fertilizer_tips": "Extremely heavy feeder of Potassium (K) and Nitrogen (N). High K ensures bunch size, sweetness, and shelf life.",
    "pests_diseases": "Panama wilt (Fusarium), Sigatoka leaf spot, Banana pseudostem weevil.",
    "economic_value": "Continuous year-round income, fast turnaround for a fruit crop, massive domestic consumption.",
    "summary": "Tropical giant herb requiring abundant warmth, rich compost, high moisture, and copious potassium.",
    "stats": {
      "N": {
        "mean": 100.23,
        "std": 11.8,
        "min": 80,
        "max": 120
      },
      "P": {
        "mean": 82.01,
        "std": 7.8,
        "min": 70,
        "max": 95
      },
      "K": {
        "mean": 50.05,
        "std": 3.2,
        "min": 45,
        "max": 55
      },
      "temperature": {
        "mean": 27.38,
        "std": 1.4,
        "min": 25,
        "max": 30
      },
      "humidity": {
        "mean": 80.36,
        "std": 3.1,
        "min": 75,
        "max": 85
      },
      "ph": {
        "mean": 5.98,
        "std": 0.31,
        "min": 5.5,
        "max": 6.5
      },
      "rainfall": {
        "mean": 104.63,
        "std": 9.8,
        "min": 90,
        "max": 120
      }
    }
  },
  "mango": {
    "key": "mango",
    "name": "Mango",
    "scientific_name": "Mangifera indica",
    "category": "Fruit",
    "icon": "🥭",
    "duration_days": "Perennial (Fruit development 100 - 130 days from flowering)",
    "sowing_season": "Monsoon (July - August)",
    "harvest_season": "March - July (variety dependent)",
    "soil_types": [
      "Deep Alluvial",
      "Red and Yellow Loam",
      "Well-drained"
    ],
    "water_requirement": "Moderate (Dry period required prior to flowering to trigger floral bud initiation)",
    "ideal_temp": "24°C - 35°C",
    "ideal_rainfall": "80 - 100 mm",
    "fertilizer_tips": "Annual manuring with FYM, Nitrogen, Phosphorus, and high Potassium for fruit sweetness and color.",
    "pests_diseases": "Mango hopper, Fruit fly, Powdery mildew, Anthracnose, Malformation.",
    "economic_value": "The King of Fruits. Top commercial orchard crop with massive domestic and global export value.",
    "summary": "Tropical fruit tree that demands distinct warm, dry pre-flowering weather and deep fertile soils.",
    "stats": {
      "N": {
        "mean": 20.07,
        "std": 11.9,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 27.18,
        "std": 7.8,
        "min": 15,
        "max": 40
      },
      "K": {
        "mean": 29.92,
        "std": 3.2,
        "min": 25,
        "max": 35
      },
      "temperature": {
        "mean": 31.21,
        "std": 2.5,
        "min": 27,
        "max": 36
      },
      "humidity": {
        "mean": 50.16,
        "std": 2.8,
        "min": 45,
        "max": 55
      },
      "ph": {
        "mean": 5.77,
        "std": 0.7,
        "min": 4.5,
        "max": 7
      },
      "rainfall": {
        "mean": 94.7,
        "std": 3.3,
        "min": 89,
        "max": 100
      }
    }
  },
  "grapes": {
    "key": "grapes",
    "name": "Grapes",
    "scientific_name": "Vitis vinifera",
    "category": "Fruit",
    "icon": "🍇",
    "duration_days": "Perennial (Berry maturity 110 - 130 days post pruning)",
    "sowing_season": "October - November (Foundation pruning in April)",
    "harvest_season": "February - April",
    "soil_types": [
      "Sandy Loam",
      "Red Sandy",
      "Well-drained Gravelly Loam"
    ],
    "water_requirement": "Moderate (Strict moisture control; rain at harvesting causes berry cracking and fungal infection)",
    "ideal_temp": "15°C - 35°C",
    "ideal_rainfall": "60 - 80 mm (Prefers dry harvest season)",
    "fertilizer_tips": "High demand for Potassium, Phosphorus, and Micronutrients (Zinc, Boron). Regular fertigation.",
    "pests_diseases": "Downy mildew, Powdery mildew, Flea beetle, Thrips, Anthracnose.",
    "economic_value": "Extremely lucrative horticultural crop for table fruit, raisins, and winery production.",
    "summary": "High-value vine crop requiring careful training/trellising, dry sunny harvest period, and precise fertigation.",
    "stats": {
      "N": {
        "mean": 23.18,
        "std": 11.6,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 132.53,
        "std": 7.9,
        "min": 120,
        "max": 145
      },
      "K": {
        "mean": 200.11,
        "std": 3.2,
        "min": 195,
        "max": 205
      },
      "temperature": {
        "mean": 23.85,
        "std": 9.7,
        "min": 8,
        "max": 42
      },
      "humidity": {
        "mean": 81.88,
        "std": 1.1,
        "min": 80,
        "max": 84
      },
      "ph": {
        "mean": 6.03,
        "std": 0.31,
        "min": 5.5,
        "max": 6.5
      },
      "rainfall": {
        "mean": 69.61,
        "std": 3,
        "min": 65,
        "max": 75
      }
    }
  },
  "watermelon": {
    "key": "watermelon",
    "name": "Watermelon",
    "scientific_name": "Citrullus lanatus",
    "category": "Fruit",
    "icon": "🍉",
    "duration_days": "80 - 100 days",
    "sowing_season": "Zaid / Summer (January - March)",
    "harvest_season": "April - June",
    "soil_types": [
      "Sandy",
      "Sandy Loam",
      "Riverbed Alluvial"
    ],
    "water_requirement": "Moderate (Frequent light irrigation during fruit growth; reduce at ripening to enhance sugar)",
    "ideal_temp": "24°C - 32°C",
    "ideal_rainfall": "40 - 60 mm",
    "fertilizer_tips": "Well-rotted FYM, moderate N, high P & K for fruit sweetness and rind firmness.",
    "pests_diseases": "Fruit fly, Red pumpkin beetle, Downy mildew, Fusarium wilt.",
    "economic_value": "Fast summer cash crop with very high return on investment within 90 days.",
    "summary": "Warm-season vine crop that flourishes in sandy warm soils with plenty of sunshine and dry harvest days.",
    "stats": {
      "N": {
        "mean": 99.42,
        "std": 11.8,
        "min": 80,
        "max": 120
      },
      "P": {
        "mean": 17,
        "std": 7.8,
        "min": 5,
        "max": 30
      },
      "K": {
        "mean": 50.22,
        "std": 3.2,
        "min": 45,
        "max": 55
      },
      "temperature": {
        "mean": 25.59,
        "std": 0.9,
        "min": 24,
        "max": 27
      },
      "humidity": {
        "mean": 85.16,
        "std": 3,
        "min": 80,
        "max": 90
      },
      "ph": {
        "mean": 6.5,
        "std": 0.31,
        "min": 6,
        "max": 7
      },
      "rainfall": {
        "mean": 50.79,
        "std": 6,
        "min": 40,
        "max": 60
      }
    }
  },
  "muskmelon": {
    "key": "muskmelon",
    "name": "Muskmelon (Cantaloupe)",
    "scientific_name": "Cucumis melo",
    "category": "Fruit",
    "icon": "🍈",
    "duration_days": "75 - 90 days",
    "sowing_season": "Zaid / Summer (February - March)",
    "harvest_season": "April - May",
    "soil_types": [
      "Sandy Loam",
      "Riverbed Sand"
    ],
    "water_requirement": "Moderate (Irrigate when topsoil is dry; keep water off vines to avoid fruit rot)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "20 - 30 mm",
    "fertilizer_tips": "Requires balanced NPK, with high Potassium for aroma and Brix sugar percentage.",
    "pests_diseases": "Aphids, Downy mildew, Powdery mildew, Fruit fly.",
    "economic_value": "Popular summer refreshing fruit commanding premium wholesale prices during peak heatwaves.",
    "summary": "Loves hot dry weather with high sunshine hours to develop rich aromatic sweetness and netted rind.",
    "stats": {
      "N": {
        "mean": 100.32,
        "std": 11.8,
        "min": 80,
        "max": 120
      },
      "P": {
        "mean": 17.72,
        "std": 7.8,
        "min": 5,
        "max": 30
      },
      "K": {
        "mean": 50.08,
        "std": 3.2,
        "min": 45,
        "max": 55
      },
      "temperature": {
        "mean": 28.64,
        "std": 0.9,
        "min": 27,
        "max": 30
      },
      "humidity": {
        "mean": 92.34,
        "std": 1.4,
        "min": 90,
        "max": 95
      },
      "ph": {
        "mean": 6.36,
        "std": 0.25,
        "min": 6,
        "max": 6.8
      },
      "rainfall": {
        "mean": 24.69,
        "std": 3,
        "min": 20,
        "max": 30
      }
    }
  },
  "apple": {
    "key": "apple",
    "name": "Apple",
    "scientific_name": "Malus domestica",
    "category": "Fruit",
    "icon": "🍏",
    "duration_days": "Perennial (130 - 150 days from full bloom)",
    "sowing_season": "Winter dormancy (December - February)",
    "harvest_season": "July - October",
    "soil_types": [
      "Deep Loamy",
      "Clay Loam with Rich Humus",
      "Well-drained Acidic"
    ],
    "water_requirement": "High (Needs 1000 - 1200 mm annual moisture; sensitive to drought during fruit enlargement)",
    "ideal_temp": "15°C - 24°C (Requires 1000+ chilling hours < 7°C)",
    "ideal_rainfall": "100 - 120 mm",
    "fertilizer_tips": "High Nitrogen during spring flush, adequate Calcium to prevent bitter pit, balanced P and K.",
    "pests_diseases": "Apple scab (Venturia inaequalis), Woolly apple aphid, San Jose scale, Powdery mildew.",
    "economic_value": "Premier temperate horticultural produce with outstanding cold-storage shelf life and high retail pricing.",
    "summary": "Temperate fruit crop requiring winter chilling hours, mild summer temps, and well-aerated fertile soils.",
    "stats": {
      "N": {
        "mean": 20.8,
        "std": 11.9,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 134.22,
        "std": 7.8,
        "min": 120,
        "max": 145
      },
      "K": {
        "mean": 199.89,
        "std": 3.2,
        "min": 195,
        "max": 205
      },
      "temperature": {
        "mean": 22.63,
        "std": 0.9,
        "min": 21,
        "max": 24
      },
      "humidity": {
        "mean": 92.33,
        "std": 1.4,
        "min": 90,
        "max": 95
      },
      "ph": {
        "mean": 5.93,
        "std": 0.28,
        "min": 5.5,
        "max": 6.5
      },
      "rainfall": {
        "mean": 112.65,
        "std": 7.4,
        "min": 100,
        "max": 125
      }
    }
  },
  "orange": {
    "key": "orange",
    "name": "Orange (Citrus)",
    "scientific_name": "Citrus sinensis",
    "category": "Fruit",
    "icon": "🍊",
    "duration_days": "Perennial (Maturity 8 - 10 months after bloom)",
    "sowing_season": "Monsoon (July - August)",
    "harvest_season": "November - March",
    "soil_types": [
      "Light Loamy",
      "Alluvial",
      "Well-drained Sub-soil"
    ],
    "water_requirement": "Moderate (Irrigate regularly; water stress causes fruit drop)",
    "ideal_temp": "15°C - 35°C",
    "ideal_rainfall": "100 - 120 mm",
    "fertilizer_tips": "Requires Micronutrient sprays (Zinc, Iron, Manganese, Boron) along with NPK and FYM.",
    "pests_diseases": "Citrus canker, Citrus psylla (Greening vector), Leaf miner, Dieback.",
    "economic_value": "High commercial value for fresh fruit market and processing (juice, essential oils, pectin).",
    "summary": "Sub-tropical citrus tree requiring plenty of sunshine, good soil drainage, and protection from frost.",
    "stats": {
      "N": {
        "mean": 19.58,
        "std": 11.8,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 16.55,
        "std": 7.7,
        "min": 5,
        "max": 30
      },
      "K": {
        "mean": 10.01,
        "std": 3.2,
        "min": 5,
        "max": 15
      },
      "temperature": {
        "mean": 22.77,
        "std": 6.4,
        "min": 10,
        "max": 35
      },
      "humidity": {
        "mean": 92.17,
        "std": 1.4,
        "min": 90,
        "max": 95
      },
      "ph": {
        "mean": 7.01,
        "std": 0.6,
        "min": 6,
        "max": 8
      },
      "rainfall": {
        "mean": 110.47,
        "std": 5.8,
        "min": 100,
        "max": 120
      }
    }
  },
  "papaya": {
    "key": "papaya",
    "name": "Papaya",
    "scientific_name": "Carica papaya",
    "category": "Fruit",
    "icon": "🍈",
    "duration_days": "10 - 12 months (Early fruiting)",
    "sowing_season": "February - March or July - September",
    "harvest_season": "Continuous after 9 - 10 months",
    "soil_types": [
      "Well-drained Sandy Loam",
      "Rich Alluvial"
    ],
    "water_requirement": "Moderate (Highly sensitive to standing water; root rot occurs rapidly in waterlogged soils)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "140 - 200 mm",
    "fertilizer_tips": "Regular monthly top-dressings of Nitrogen, Phosphorus, and Potassium alongside compost.",
    "pests_diseases": "Papaya ringspot virus, Stem rot, Root knot nematodes, Mealybugs.",
    "economic_value": "Rapid yielding fruit tree providing year-round steady income and papain enzyme industrial value.",
    "summary": "Fast-growing tropical fruit requiring warm weather, bright sun, and excellent soil drainage.",
    "stats": {
      "N": {
        "mean": 49.88,
        "std": 11.8,
        "min": 30,
        "max": 70
      },
      "P": {
        "mean": 59.05,
        "std": 7.8,
        "min": 45,
        "max": 70
      },
      "K": {
        "mean": 50.04,
        "std": 3.2,
        "min": 45,
        "max": 55
      },
      "temperature": {
        "mean": 33.72,
        "std": 6,
        "min": 23,
        "max": 44
      },
      "humidity": {
        "mean": 92.4,
        "std": 1.4,
        "min": 90,
        "max": 95
      },
      "ph": {
        "mean": 6.74,
        "std": 0.16,
        "min": 6.5,
        "max": 7
      },
      "rainfall": {
        "mean": 142.63,
        "std": 63.8,
        "min": 40,
        "max": 250
      }
    }
  },
  "coconut": {
    "key": "coconut",
    "name": "Coconut",
    "scientific_name": "Cocos nucifera",
    "category": "Commercial / Plantation",
    "icon": "🥥",
    "duration_days": "Perennial (Yields begin in 4-6 years, productive for 60+ years)",
    "sowing_season": "Beginning of monsoon (May - June)",
    "harvest_season": "Year-round (Harvested monthly or every 45 days)",
    "soil_types": [
      "Coastal Sandy",
      "Alluvial",
      "Lateritic Soils"
    ],
    "water_requirement": "High (Needs steady water table; 1300 - 2300 mm annually or drip irrigation)",
    "ideal_temp": "25°C - 35°C",
    "ideal_rainfall": "150 - 250 mm",
    "fertilizer_tips": "Requires high Potassium (MOP), Magnesium, and Common Salt (NaCl) for heavy nut bearing and copra yield.",
    "pests_diseases": "Rhinoceros beetle, Red palm weevil, Bud rot, Coconut root wilt.",
    "economic_value": "The 'Tree of Life' - every part is commercialized: tender water, copra, coconut oil, coir, and shell carbon.",
    "summary": "Coastal tropical palm requiring high atmospheric humidity, warm coastal breeze, and sunny days.",
    "stats": {
      "N": {
        "mean": 21.98,
        "std": 11.8,
        "min": 0,
        "max": 40
      },
      "P": {
        "mean": 16.9,
        "std": 7.8,
        "min": 5,
        "max": 30
      },
      "K": {
        "mean": 30.59,
        "std": 3.2,
        "min": 25,
        "max": 35
      },
      "temperature": {
        "mean": 27.41,
        "std": 1.4,
        "min": 25,
        "max": 30
      },
      "humidity": {
        "mean": 94.84,
        "std": 2.9,
        "min": 90,
        "max": 100
      },
      "ph": {
        "mean": 5.98,
        "std": 0.28,
        "min": 5.5,
        "max": 6.5
      },
      "rainfall": {
        "mean": 175.69,
        "std": 27.9,
        "min": 130,
        "max": 225
      }
    }
  },
  "cotton": {
    "key": "cotton",
    "name": "Cotton (White Gold)",
    "scientific_name": "Gossypium hirsutum",
    "category": "Commercial / Fiber",
    "icon": "☁️",
    "duration_days": "150 - 180 days",
    "sowing_season": "Kharif (April - June)",
    "harvest_season": "November - February (multiple pickings)",
    "soil_types": [
      "Deep Black Cotton Soil (Regur)",
      "Alluvial Loam"
    ],
    "water_requirement": "Moderate (Needs 500 - 700 mm; dry weather essential during boll opening and picking)",
    "ideal_temp": "22°C - 35°C",
    "ideal_rainfall": "60 - 100 mm",
    "fertilizer_tips": "High Nitrogen in split doses; Potassium prevents leaf reddening and enhances fiber micronaire quality.",
    "pests_diseases": "Pink bollworm, Whitefly, American bollworm, Jassids, Leaf curl virus.",
    "economic_value": "Prime cash crop supporting global textile industries and cottonseed oil manufacturing.",
    "summary": "Demands abundant sunshine, long frost-free periods, and deep black soils with good moisture retention.",
    "stats": {
      "N": {
        "mean": 117.77,
        "std": 11.8,
        "min": 100,
        "max": 140
      },
      "P": {
        "mean": 46.24,
        "std": 7.8,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 19.56,
        "std": 3.2,
        "min": 15,
        "max": 25
      },
      "temperature": {
        "mean": 23.99,
        "std": 1.2,
        "min": 22,
        "max": 26
      },
      "humidity": {
        "mean": 79.84,
        "std": 3.2,
        "min": 75,
        "max": 85
      },
      "ph": {
        "mean": 6.91,
        "std": 0.6,
        "min": 6,
        "max": 8
      },
      "rainfall": {
        "mean": 80.4,
        "std": 12,
        "min": 60,
        "max": 100
      }
    }
  },
  "jute": {
    "key": "jute",
    "name": "Jute (Golden Fiber)",
    "scientific_name": "Corchorus capsularis",
    "category": "Commercial / Fiber",
    "icon": "🌾",
    "duration_days": "120 - 150 days",
    "sowing_season": "Pre-monsoon (March - May)",
    "harvest_season": "July - September (120 days at 50% flowering)",
    "soil_types": [
      "New Alluvial Soil",
      "Clayey Silt Loam"
    ],
    "water_requirement": "Very High (Needs high humidity > 70% and copious water for field retting)",
    "ideal_temp": "24°C - 38°C",
    "ideal_rainfall": "150 - 200 mm",
    "fertilizer_tips": "Nitrogen is critical for vegetative fiber growth (60-80 kg N/ha), complemented with balanced P & K.",
    "pests_diseases": "Stem rot (Macrophomina), Semi-looper, Yellow mite.",
    "economic_value": "Biodegradable natural fiber with booming international demand for packaging, geotextiles, and handicrafts.",
    "summary": "Warm, humid river delta crop demanding monsoon rains, silt-rich floodplains, and clean flowing water for retting.",
    "stats": {
      "N": {
        "mean": 78.4,
        "std": 11.8,
        "min": 60,
        "max": 100
      },
      "P": {
        "mean": 46.86,
        "std": 7.8,
        "min": 35,
        "max": 60
      },
      "K": {
        "mean": 39.99,
        "std": 3.2,
        "min": 35,
        "max": 45
      },
      "temperature": {
        "mean": 24.96,
        "std": 1.2,
        "min": 23,
        "max": 27
      },
      "humidity": {
        "mean": 79.64,
        "std": 5.9,
        "min": 70,
        "max": 90
      },
      "ph": {
        "mean": 6.73,
        "std": 0.44,
        "min": 6,
        "max": 7.5
      },
      "rainfall": {
        "mean": 174.7,
        "std": 17.5,
        "min": 150,
        "max": 200
      }
    }
  },
  "coffee": {
    "key": "coffee",
    "name": "Coffee",
    "scientific_name": "Coffea arabica / canephora",
    "category": "Commercial / Plantation",
    "icon": "☕",
    "duration_days": "Perennial (Berry maturity 7 - 9 months post blossom)",
    "sowing_season": "June - September (Monsoon)",
    "harvest_season": "November - February",
    "soil_types": [
      "Deep Rich Forest Loam",
      "Volcanic / Red Lateritic Soil rich in Humus"
    ],
    "water_requirement": "High (Needs 1500 - 2000 mm rain, blossom showers in March/April, and shaded canopy)",
    "ideal_temp": "15°C - 28°C",
    "ideal_rainfall": "150 - 200 mm",
    "fertilizer_tips": "High NPK (120:90:120) with micronutrients like Zinc, Boron, and regular mulching with organic leaf litter.",
    "pests_diseases": "Coffee berry borer, White stem borer, Coffee leaf rust (Hemileia vastatrix).",
    "economic_value": "High-value global beverage commodity with strong international specialty export auctions.",
    "summary": "Hill plantation crop cultivated under two-tier forest shade canopy in tropical highlands with acidic humus-rich soil.",
    "stats": {
      "N": {
        "mean": 101.2,
        "std": 11.8,
        "min": 80,
        "max": 120
      },
      "P": {
        "mean": 28.77,
        "std": 7.8,
        "min": 15,
        "max": 40
      },
      "K": {
        "mean": 29.94,
        "std": 3.2,
        "min": 25,
        "max": 35
      },
      "temperature": {
        "mean": 25.54,
        "std": 1.4,
        "min": 23,
        "max": 28
      },
      "humidity": {
        "mean": 58.87,
        "std": 5.5,
        "min": 50,
        "max": 70
      },
      "ph": {
        "mean": 6.79,
        "std": 0.52,
        "min": 6,
        "max": 7.5
      },
      "rainfall": {
        "mean": 158.07,
        "std": 26.6,
        "min": 115,
        "max": 200
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CROP_DATA };
}
