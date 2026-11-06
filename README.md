# 🌱 CropAI — Crop Recommendation & Soil Health Advisory System

An intelligent, interactive precision agriculture web application built using **HTML5, CSS3, and JavaScript**. It uses a **Gaussian Naive Bayes Classifier** and multi-dimensional agronomic modeling to recommend the optimal crop for any farm based on soil nutrients and climatic conditions.

---

## 🚀 Quick Start (Zero Setup Required)

You do **not** need to install any backend server or heavy libraries. The entire machine learning engine, agronomic database, and interactive radar visualizations run natively in modern web browsers.

### Method 1: Direct Browser Launch
Simply double-click:
```
index.html
```
Or right-click `index.html` → **Open with** → **Google Chrome** / **Microsoft Edge** / **Firefox**.

### Method 2: Local HTTP Server (Optional)
If you prefer running with a local development server:
```bash
# Using npx
npx serve .

# Or using Python (if installed)
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

## 🌟 Key Features

### 1. Multi-Parameter Soil & Climate Input Center
* **Nitrogen (N)**: 0 to 140 kg/ha
* **Phosphorus (P)**: 5 to 145 kg/ha
* **Potassium (K)**: 5 to 205 kg/ha
* **Temperature**: 8°C to 45°C
* **Relative Humidity**: 14% to 100%
* **Soil pH**: 3.5 to 9.5 (Acidity / Alkalinity scale)
* **Rainfall**: 20 mm to 300 mm (Seasonal precipitation)
* **Dual Control Mode**: Real-time range sliders synchronized bi-directionally with number input boxes and `+` / `-` micro-steppers.
* **Live Nutrient Status Tags**: Instant indicators showing whether each parameter is *Deficient / Low*, *Optimal*, or *Surplus / High*.

### 2. Machine Learning Agronomic Classifier (`ml_engine.js`)
* Implements a **Gaussian Naive Bayes** classifier calibrated with statistical benchmarks (means, standard deviations, and empirical ranges) across **22 crops** from agricultural datasets.
* Computes calibrated softmax probability percentages for multi-crop ranking.
* Surfaces the **Primary Winner** with match confidence, plus **Rank #2** and **Rank #3** viable alternative crops.

### 3. Comprehensive Cultivation Guidance
Provides complete agronomic profiles for all 22 supported crops:
* **Sowing & Harvest Windows** (Kharif, Rabi, Zaid, Summer, Perennial cycles)
* **Crop Growth Duration** (e.g. 90-120 days)
* **Optimal Soil Types** (Clayey Loam, Alluvial, Black Cotton, Sandy Loam)
* **Water & Irrigation Strategy** (Submergence, Drip fertigation, Rainfed)
* **Fertilizer Management Strategy** (Split N application, P & K basal, Boron, Zinc)
* **Common Pests & Diseases** (Stem borer, Blast, Pod borer, Rust, Downy mildew)
* **Economic & Commercial Value** (Market demand, export potential, industrial uses)

### 4. Soil Health Diagnostic Scorecard & Fertilizer Rx
* **Soil Health Index (0 - 100)** with color-coded rating badge (*Excellent*, *Good*, *Fair*, *Needs Attention*).
* **Specific Chemical Remedies**:
  * Liming (`CaCO3` / dolomite) prescriptions for acidic soils ($pH < 5.5$).
  * Gypsum (`CaSO4`) recommendations for sodic / alkaline soils ($pH > 8.5$).
  * Targeted dosage recommendations for Urea (N), DAP / SSP (P), and MOP (K).

### 5. Interactive HTML5 Canvas Radar Chart
* Renders a 7-axis radar chart with high-DPI retina display support.
* Visualizes your farm's soil & weather conditions (Emerald Green polygon) directly superimposed over the recommended crop's benchmark ideal profile (Amber Gold polygon).

### 6. One-Click Agricultural Presets
Instant one-click presets for rapid testing:
* 🌾 **Wetland Rice (Paddy)**
* 🌽 **Maize (Corn)**
* ☕ **Highland Coffee Estate**
* 🍏 **Temperate Apple Orchard**
* 🍇 **Commercial Vineyard**
* 🍉 **Summer Watermelon**
* 🫘 **Semi-Arid Chickpea**
* ☁️ **Cotton (Black Soil)**
* 🥥 **Coastal Humid Coconut**
* 🍌 **Tropical Banana Grove**

### 7. 22-Crop Encyclopedia & Explorer Modal
* Searchable and filterable knowledgebase of all 22 crops (Cereals, Pulses, Fruits, Commercial/Fiber).
* *"Simulate Field Environment"* button on every crop card to auto-load its ideal parameters straight into the simulator.

### 8. Print & Export Farm Advisory Report
* Dedicated `@media print` styling that formats the current diagnosis into a clean, professional agricultural extension report suitable for saving as PDF or printing.

### 9. Theme & Accessibility
* Light Mode / Dark Mode toggle with preference saved in `localStorage`.
* Modern glassmorphism UI with responsive grid layout optimized for mobile, tablet, and desktop screens.

---

## 📂 Project Architecture

```
ml project/
├── index.html       # Semantic HTML5 layout and interface structure
├── style.css        # Responsive agricultural CSS design system & print stylesheet
├── crop_data.js     # Agronomic catalog & benchmark statistics for 22 crops
├── ml_engine.js     # Gaussian Naive Bayes classifier & soil diagnosis engine
├── app.js           # UI state management, sliders sync, canvas radar & presets
└── README.md        # Comprehensive documentation
```

---

## 🌾 Supported Crops (22 Benchmark Species)
* **Cereals**: Rice, Maize
* **Pulses / Legumes**: Chickpea, Kidney Beans, Pigeon Peas, Moth Beans, Mung Bean, Black Gram, Lentil
* **Fruits**: Pomegranate, Banana, Mango, Grapes, Watermelon, Muskmelon, Apple, Orange, Papaya
* **Commercial & Fiber**: Coconut, Cotton, Jute, Coffee

