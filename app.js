/**
 * CropAI Application Controller
 * Handles user interaction, ML engine integration, canvas radar chart, and modal exploration
 */

(function () {
  'use strict';

  // Instantiate ML Engine with Agronomic Dataset
  const engine = new CropRecommendationEngine(CROP_DATA);

  // DOM Elements
  const inputs = {
    N: document.getElementById('paramN'),
    P: document.getElementById('paramP'),
    K: document.getElementById('paramK'),
    temperature: document.getElementById('paramTemp'),
    humidity: document.getElementById('paramHumidity'),
    ph: document.getElementById('paramPh'),
    rainfall: document.getElementById('paramRainfall')
  };

  const sliders = {
    N: document.getElementById('sliderN'),
    P: document.getElementById('sliderP'),
    K: document.getElementById('sliderK'),
    temperature: document.getElementById('sliderTemp'),
    humidity: document.getElementById('sliderHumidity'),
    ph: document.getElementById('sliderPh'),
    rainfall: document.getElementById('sliderRainfall')
  };

  const statuses = {
    N: document.getElementById('statusN'),
    P: document.getElementById('statusP'),
    K: document.getElementById('statusK'),
    temperature: document.getElementById('statusTemp'),
    humidity: document.getElementById('statusHumidity'),
    ph: document.getElementById('statusPh'),
    rainfall: document.getElementById('statusRainfall')
  };

  const btnPredict = document.getElementById('btnPredict');
  const btnReset = document.getElementById('btnReset');
  const btnRandomize = document.getElementById('btnRandomize');
  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const btnPrintReport = document.getElementById('btnPrintReport');
  const btnOpenCatalog = document.getElementById('btnOpenCatalog');
  const btnCloseCatalog = document.getElementById('btnCloseCatalog');
  const catalogModal = document.getElementById('catalogModal');
  const catalogSearch = document.getElementById('catalogSearch');
  const catalogGrid = document.getElementById('catalogGrid');
  const radarCanvas = document.getElementById('radarCanvas');

  let currentPrediction = null;

  // Agricultural Presets Mapping
  const PRESETS = {
    rice: { N: 85, P: 48, K: 40, temperature: 24, humidity: 82, ph: 6.5, rainfall: 235 },
    maize: { N: 78, P: 50, K: 20, temperature: 22.5, humidity: 65, ph: 6.3, rainfall: 85 },
    coffee: { N: 100, P: 28, K: 30, temperature: 25.5, humidity: 60, ph: 6.8, rainfall: 160 },
    apple: { N: 20, P: 135, K: 200, temperature: 22.5, humidity: 92, ph: 6.0, rainfall: 112 },
    grapes: { N: 24, P: 132, K: 200, temperature: 24, humidity: 82, ph: 6.0, rainfall: 70 },
    watermelon: { N: 100, P: 18, K: 50, temperature: 25.5, humidity: 85, ph: 6.5, rainfall: 50 },
    chickpea: { N: 40, P: 68, K: 80, temperature: 19, humidity: 17, ph: 7.3, rainfall: 80 },
    cotton: { N: 118, P: 46, K: 20, temperature: 24, humidity: 80, ph: 6.9, rainfall: 80 },
    coconut: { N: 22, P: 17, K: 30, temperature: 27.5, humidity: 95, ph: 6.0, rainfall: 175 },
    banana: { N: 100, P: 82, K: 50, temperature: 27.5, humidity: 80, ph: 6.0, rainfall: 105 }
  };

  /**
   * Sync Number Inputs & Sliders
   */
  function syncInputs() {
    for (const key of Object.keys(inputs)) {
      const numInput = inputs[key];
      const slider = sliders[key];

      // When slider moves -> update number input
      slider.addEventListener('input', () => {
        numInput.value = slider.value;
        updateStatusTag(key, Number(slider.value));
        triggerAutoPredictDebounced();
      });

      // When number changes -> update slider
      numInput.addEventListener('input', () => {
        slider.value = numInput.value;
        updateStatusTag(key, Number(numInput.value));
        triggerAutoPredictDebounced();
      });
    }

    // Stepper buttons (+ / -)
    document.querySelectorAll('.param-stepper-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const step = parseFloat(btn.getAttribute('data-step'));
        const inputElem = document.getElementById(targetId);
        if (inputElem) {
          let currentVal = parseFloat(inputElem.value) || 0;
          let min = parseFloat(inputElem.min);
          let max = parseFloat(inputElem.max);
          let newVal = Math.min(max, Math.max(min, currentVal + step));
          inputElem.value = newVal;
          inputElem.dispatchEvent(new Event('input'));
        }
      });
    });
  }

  /**
   * Update visual status tags under sliders
   */
  function updateStatusTag(key, val) {
    const el = statuses[key];
    if (!el) return;

    if (key === 'N') {
      if (val < 35) { el.textContent = 'Low / Deficient (<35)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 90) { el.textContent = 'Optimal (35-90)'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'High / Surplus (>90)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'P') {
      if (val < 25) { el.textContent = 'Low / Deficient (<25)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 75) { el.textContent = 'Optimal (25-75)'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'High / Surplus (>75)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'K') {
      if (val < 30) { el.textContent = 'Low / Deficient (<30)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 80) { el.textContent = 'Optimal (30-80)'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'High / Surplus (>80)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'temperature') {
      if (val < 18) { el.textContent = 'Cool / Temperate'; el.className = 'param-status-tag status-opt'; }
      else if (val <= 32) { el.textContent = 'Warm / Tropical'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'High Heat (>32°C)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'humidity') {
      if (val < 40) { el.textContent = 'Arid / Low (<40%)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 75) { el.textContent = 'Moderate Humidity'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'High / Saturated (>75%)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'ph') {
      if (val < 5.5) { el.textContent = 'Acidic (<5.5)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 7.5) { el.textContent = 'Neutral / Ideal (6.5-7.5)'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'Alkaline (>7.5)'; el.className = 'param-status-tag status-sur'; }
    } else if (key === 'rainfall') {
      if (val < 60) { el.textContent = 'Low / Drought (<60mm)'; el.className = 'param-status-tag status-def'; }
      else if (val <= 160) { el.textContent = 'Moderate Rainfall'; el.className = 'param-status-tag status-opt'; }
      else { el.textContent = 'Heavy Rain / Monsoon'; el.className = 'param-status-tag status-sur'; }
    }
  }

  /**
   * Set all input values
   */
  function setInputValues(vals) {
    for (const key of Object.keys(vals)) {
      if (inputs[key] && sliders[key]) {
        inputs[key].value = vals[key];
        sliders[key].value = vals[key];
        updateStatusTag(key, vals[key]);
      }
    }
  }

  /**
   * Get current input values
   */
  function getInputValues() {
    return {
      N: parseFloat(inputs.N.value) || 0,
      P: parseFloat(inputs.P.value) || 0,
      K: parseFloat(inputs.K.value) || 0,
      temperature: parseFloat(inputs.temperature.value) || 0,
      humidity: parseFloat(inputs.humidity.value) || 0,
      ph: parseFloat(inputs.ph.value) || 0,
      rainfall: parseFloat(inputs.rainfall.value) || 0
    };
  }

  /**
   * Main Recommend / Predict Handler
   */
  function runPrediction() {
    const userInputs = getInputValues();
    const result = engine.predict(userInputs);
    currentPrediction = result;

    renderWinnerCard(result.primary);
    renderAlternatives(result.alternatives);
    renderCultivationGuide(result.primary);
    renderSoilHealth(result.soilHealth);
    renderRadarChart(result.radarData);
  }

  let debounceTimer = null;
  function triggerAutoPredictDebounced() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runPrediction();
    }, 200);
  }

  /**
   * Render Hero Winner Card
   */
  function renderWinnerCard(crop) {
    document.getElementById('winnerIcon').textContent = crop.icon || '🌱';
    document.getElementById('winnerName').textContent = crop.name;
    document.getElementById('winnerSciName').textContent = crop.scientific_name || '';
    document.getElementById('winnerConfidence').textContent = crop.confidence + '%';
    document.getElementById('winnerCategory').textContent = `${crop.icon} ${crop.category}`;
    document.getElementById('winnerDuration').textContent = `⏱️ ${crop.duration_days}`;
    document.getElementById('winnerWater').textContent = `💧 ${crop.water_requirement.split('(')[0].trim()}`;
    document.getElementById('winnerSeason').textContent = `📅 ${crop.sowing_season.split('(')[0].trim()}`;
    document.getElementById('winnerSummary').textContent = crop.summary;

    document.getElementById('glanceSowing').textContent = crop.sowing_season.split('(')[0].trim() || 'Seasonal';
    document.getElementById('glanceHarvest').textContent = crop.harvest_season.split('(')[0].trim() || 'Seasonal';
    document.getElementById('glanceTemp').textContent = crop.ideal_temp || '18°C - 30°C';
    document.getElementById('glanceRain').textContent = crop.ideal_rainfall || '100 - 200 mm';

    // Animate badge pulse
    const winnerCard = document.getElementById('winnerCard');
    winnerCard.classList.remove('pulse-active');
    void winnerCard.offsetWidth; // Trigger reflow
    winnerCard.classList.add('pulse-active');
  }

  /**
   * Render Alternative Viable Crops
   */
  function renderAlternatives(alts) {
    const container = document.getElementById('altCropsContainer');
    container.innerHTML = '';

    if (!alts || alts.length === 0) {
      container.innerHTML = '<div style="color: var(--text-dim); font-size: 0.85rem;">No alternative matches within threshold.</div>';
      return;
    }

    alts.forEach((alt, idx) => {
      const card = document.createElement('div');
      card.className = 'alt-crop-card';
      card.innerHTML = `
        <div class="alt-crop-info">
          <div class="alt-crop-icon">${alt.icon || '🌱'}</div>
          <div>
            <div class="alt-crop-name">${alt.name}</div>
            <div class="alt-crop-sub">${alt.category} • ${alt.duration_days.split(' ')[0]} days</div>
          </div>
        </div>
        <div class="alt-crop-score">
          <div class="alt-crop-pct">${alt.confidence}%</div>
          <div class="alt-crop-rank">Rank #${idx + 2}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        // Load this alternative crop's ideal parameters into the form
        loadCropIdealToForm(alt.key);
      });

      container.appendChild(card);
    });
  }

  /**
   * Render Cultivation Guide
   */
  function renderCultivationGuide(crop) {
    document.getElementById('cultSowingWindow').textContent = 
      `Sowing: ${crop.sowing_season}. Harvest: ${crop.harvest_season}. Duration: ${crop.duration_days}.`;
    
    document.getElementById('cultSoilTypes').textContent = 
      crop.soil_types.join(', ') + ' with suitable drainage and texture.';
    
    document.getElementById('cultWater').textContent = crop.water_requirement;
    document.getElementById('cultFertilizer').textContent = crop.fertilizer_tips;
    document.getElementById('cultPests').textContent = crop.pests_diseases;
    document.getElementById('cultEconomic').textContent = crop.economic_value;
  }

  /**
   * Render Soil Health Scorecard
   */
  function renderSoilHealth(health) {
    const scoreElem = document.getElementById('soilHealthScore');
    const ratingElem = document.getElementById('soilRatingPill');
    scoreElem.textContent = health.healthScore;
    ratingElem.textContent = `${health.rating} (${health.healthScore}/100)`;
    ratingElem.style.color = health.color;
    ratingElem.style.background = health.color + '22';

    // Diagnostics
    document.getElementById('soilDiagN').textContent = health.n.value;
    const statN = document.getElementById('soilStatN');
    statN.textContent = health.n.status;
    statN.className = `status status-${health.n.class}`;

    document.getElementById('soilDiagP').textContent = health.p.value;
    const statP = document.getElementById('soilStatP');
    statP.textContent = health.p.status;
    statP.className = `status status-${health.p.class}`;

    document.getElementById('soilDiagK').textContent = health.k.value;
    const statK = document.getElementById('soilStatK');
    statK.textContent = health.k.status;
    statK.className = `status status-${health.k.class}`;

    document.getElementById('soilDiagPh').textContent = health.ph.value;
    const statPh = document.getElementById('soilStatPh');
    statPh.textContent = health.ph.status;
    statPh.className = `status status-${health.ph.class}`;

    // Advice list
    const list = document.getElementById('soilAdviceList');
    list.innerHTML = '';
    health.advice.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'advice-item';
      li.innerHTML = `
        <div class="step-badge">${idx + 1}</div>
        <div>
          <strong style="color: var(--text-main);">${item.type}:</strong> ${item.action}
        </div>
      `;
      list.appendChild(li);
    });
  }

  /**
   * Render Interactive Radar Chart (HTML5 Canvas)
   */
  function renderRadarChart(radarData) {
    if (!radarCanvas || !radarData) return;
    const ctx = radarCanvas.getContext('2d');
    const width = radarCanvas.width;
    const height = radarCanvas.height;

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 55;
    const labels = radarData.labels;
    const numAxes = labels.length;
    const angleStep = (Math.PI * 2) / numAxes;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
    const textColor = isLight ? '#475569' : '#94a3b8';

    // Draw concentric polygon grid (5 levels)
    const levels = 5;
    for (let l = 1; l <= levels; l++) {
      const levelRadius = (radius / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * levelRadius;
        const y = centerY + Math.sin(angle) * levelRadius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw radial axis lines & labels
    ctx.font = '600 11px Inter, sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      // Axis line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = gridColor;
      ctx.stroke();

      // Axis label position
      const labelX = centerX + Math.cos(angle) * (radius + 25);
      const labelY = centerY + Math.sin(angle) * (radius + 20);
      ctx.fillText(labels[i], labelX, labelY);
    }

    // Helper to draw polygon for a dataset
    function drawPolygon(values, fillColor, strokeColor) {
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const valPct = Math.max(0, Math.min(100, values[i])) / 100;
        const x = centerX + Math.cos(angle) * (radius * valPct);
        const y = centerY + Math.sin(angle) * (radius * valPct);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw vertices dots
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const valPct = Math.max(0, Math.min(100, values[i])) / 100;
        const x = centerX + Math.cos(angle) * (radius * valPct);
        const y = centerY + Math.sin(angle) * (radius * valPct);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();
      }
    }

    // Draw Benchmark Ideal Crop Polygon (Amber)
    drawPolygon(radarData.idealNormalized, 'rgba(245, 158, 11, 0.22)', '#f59e0b');

    // Draw User Farm Polygon (Emerald Green)
    drawPolygon(radarData.userNormalized, 'rgba(16, 185, 129, 0.35)', '#10b981');
  }

  /**
   * Load a Crop's Ideal Benchmark Parameters into the Form
   */
  function loadCropIdealToForm(cropKey) {
    const crop = CROP_DATA[cropKey];
    if (!crop || !crop.stats) return;

    setInputValues({
      N: Math.round(crop.stats.N.mean),
      P: Math.round(crop.stats.P.mean),
      K: Math.round(crop.stats.K.mean),
      temperature: Math.round(crop.stats.temperature.mean * 10) / 10,
      humidity: Math.round(crop.stats.humidity.mean),
      ph: Math.round(crop.stats.ph.mean * 10) / 10,
      rainfall: Math.round(crop.stats.rainfall.mean)
    });

    runPrediction();

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Presets Click Event Handlers
   */
  function initPresets() {
    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const key = chip.getAttribute('data-preset');
        if (PRESETS[key]) {
          setInputValues(PRESETS[key]);
          runPrediction();
        }
      });
    });
  }

  /**
   * Randomizer Feature
   */
  function initRandomizer() {
    btnRandomize.addEventListener('click', () => {
      const keys = Object.keys(CROP_DATA);
      const randomCropKey = keys[Math.floor(Math.random() * keys.length)];
      const targetStats = CROP_DATA[randomCropKey].stats;

      // Add gentle jitter (+/- 8%) around that crop's realistic numbers
      const jitter = (val, maxDelta) => {
        const delta = (Math.random() * 2 - 1) * maxDelta;
        return Math.round((val + delta) * 10) / 10;
      };

      setInputValues({
        N: Math.max(5, Math.min(135, jitter(targetStats.N.mean, 10))),
        P: Math.max(8, Math.min(140, jitter(targetStats.P.mean, 8))),
        K: Math.max(8, Math.min(200, jitter(targetStats.K.mean, 12))),
        temperature: Math.max(10, Math.min(42, jitter(targetStats.temperature.mean, 2.5))),
        humidity: Math.max(20, Math.min(98, jitter(targetStats.humidity.mean, 6))),
        ph: Math.max(4.5, Math.min(8.8, jitter(targetStats.ph.mean, 0.4))),
        rainfall: Math.max(25, Math.min(280, jitter(targetStats.rainfall.mean, 18)))
      });

      runPrediction();
    });
  }

  /**
   * Reset Feature
   */
  function initReset() {
    btnReset.addEventListener('click', () => {
      setInputValues(PRESETS.rice);
      runPrediction();
    });
  }

  /**
   * Deep Insights Tabs
   */
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }

        // If radar tab is opened, redraw radar canvas
        if (targetId === 'tabRadar' && currentPrediction) {
          setTimeout(() => {
            renderRadarChart(currentPrediction.radarData);
          }, 50);
        }
      });
    });
  }

  /**
   * Theme Toggle (Dark / Light Mode)
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('cropai_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    btnThemeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cropai_theme', next);
      themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';

      // Redraw radar chart for theme contrast
      if (currentPrediction) {
        renderRadarChart(currentPrediction.radarData);
      }
    });
  }

  /**
   * Print Report
   */
  function initPrint() {
    btnPrintReport.addEventListener('click', () => {
      window.print();
    });
  }

  /**
   * 22-Crop Catalog Modal & Filtering
   */
  function initCatalog() {
    // Open Modal
    btnOpenCatalog.addEventListener('click', () => {
      catalogModal.classList.add('open');
      renderCatalogGrid('all', '');
    });

    // Close Modal
    btnCloseCatalog.addEventListener('click', () => {
      catalogModal.classList.remove('open');
    });

    catalogModal.addEventListener('click', (e) => {
      if (e.target === catalogModal) {
        catalogModal.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && catalogModal.classList.contains('open')) {
        catalogModal.classList.remove('open');
      }
    });

    // Filter Pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        renderCatalogGrid(filter, catalogSearch.value.trim().toLowerCase());
      });
    });

    // Search input
    catalogSearch.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-pill.active')?.getAttribute('data-filter') || 'all';
      renderCatalogGrid(activeFilter, catalogSearch.value.trim().toLowerCase());
    });
  }

  /**
   * Render Catalog Modal Grid
   */
  function renderCatalogGrid(categoryFilter, search) {
    catalogGrid.innerHTML = '';
    const crops = Object.values(CROP_DATA);

    const filtered = crops.filter(crop => {
      const matchesCategory = categoryFilter === 'all' || 
        crop.category.toLowerCase().includes(categoryFilter.toLowerCase());

      const matchesSearch = !search || 
        crop.name.toLowerCase().includes(search) || 
        crop.scientific_name.toLowerCase().includes(search) ||
        crop.summary.toLowerCase().includes(search) ||
        crop.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      catalogGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">No crops match your search criteria.</div>';
      return;
    }

    filtered.forEach(crop => {
      const card = document.createElement('div');
      card.className = 'catalog-card';
      card.innerHTML = `
        <div class="catalog-card-top">
          <div class="catalog-card-icon">${crop.icon || '🌱'}</div>
          <div class="catalog-card-titles">
            <h4>${crop.name}</h4>
            <span>${crop.scientific_name}</span>
          </div>
        </div>

        <div class="crop-tags-bar" style="margin-bottom: 0.25rem;">
          <span class="crop-tag category" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;">${crop.category}</span>
          <span class="crop-tag" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;">${crop.duration_days.split(' ')[0]} days</span>
        </div>

        <div class="catalog-card-stats">
          <div>🌡️ <strong>Temp:</strong> ${crop.ideal_temp}</div>
          <div>🌧️ <strong>Rainfall:</strong> ${crop.ideal_rainfall}</div>
          <div>💧 <strong>Water:</strong> ${crop.water_requirement.split('(')[0].trim()}</div>
        </div>

        <button class="btn-load-crop" data-crop="${crop.key}">
          <span>⚙️</span> Simulate Field Environment
        </button>
      `;

      card.querySelector('.btn-load-crop').addEventListener('click', () => {
        catalogModal.classList.remove('open');
        loadCropIdealToForm(crop.key);
      });

      catalogGrid.appendChild(card);
    });
  }

  /**
   * Initialize Everything
   */
  function init() {
    syncInputs();
    initPresets();
    initRandomizer();
    initReset();
    initTabs();
    initTheme();
    initPrint();
    initCatalog();

    btnPredict.addEventListener('click', runPrediction);

    // Initial prediction run with default parameters
    runPrediction();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

