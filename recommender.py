import joblib
import json
import numpy as np
from crop_catalog import CROP_CATALOG

class CropRecommender:
    def __init__(self, model_path='crop_model.joblib', stats_path='crop_stats.json'):
        self.model = joblib.load(model_path)
        with open(stats_path, 'r') as f:
            self.crop_stats = json.load(f)
        self.features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

    def assess_soil_health(self, n, p, k, ph):
        # Soil Nutrient Ratings
        n_status = "Deficient (Low)" if n < 35 else ("Optimal" if n <= 90 else "High / Surplus")
        p_status = "Deficient (Low)" if p < 25 else ("Optimal" if p <= 75 else "High / Surplus")
        k_status = "Deficient (Low)" if k < 30 else ("Optimal" if k <= 80 else "High / Surplus")

        if ph < 5.5:
            ph_status = "Strongly Acidic"
            ph_remedy = "Apply agricultural lime (calcium carbonate) or dolomite to raise pH."
        elif ph < 6.5:
            ph_status = "Moderately Acidic"
            ph_remedy = "Slightly acidic soil; suitable for most crops. Moderate liming or organic compost recommended if planting acid-sensitive crops."
        elif ph <= 7.5:
            ph_status = "Neutral (Optimal)"
            ph_remedy = "Ideal balanced pH. Excellent nutrient bioavailability across all major macro and micronutrients."
        elif ph <= 8.5:
            ph_status = "Moderately Alkaline"
            ph_remedy = "Add organic matter, farmyard manure, or sulfur to gently lower pH and boost phosphorus availability."
        else:
            ph_status = "Strongly Alkaline / Saline"
            ph_remedy = "Apply agricultural gypsum (calcium sulfate) and ensure good drainage to leach excess sodium."

        # Soil Health Score Calculation (out of 100)
        score = 100
        if n < 30 or n > 120: score -= 12
        if p < 20 or p > 100: score -= 12
        if k < 20 or k > 100: score -= 12
        if ph < 5.5 or ph > 8.2: score -= 18
        elif ph < 6.0 or ph > 7.8: score -= 8

        score = max(35, min(100, score))

        # Fertilizer advisory suggestions
        fertilizer_advice = []
        if n < 35:
            fertilizer_advice.append("Nitrogen is low: Supplement with Urea, Ammonium Sulfate, or well-decomposed cow dung manure.")
        elif n > 110:
            fertilizer_advice.append("Nitrogen is high: Avoid synthetic nitrogenous fertilizers to prevent vegetative overgrowth and lodging.")

        if p < 25:
            fertilizer_advice.append("Phosphorus is low: Apply DAP (Di-Ammonium Phosphate) or SSP (Single Super Phosphate) during basal tillage.")
        
        if k < 30:
            fertilizer_advice.append("Potassium is low: Incorporate MOP (Muriate of Potash) or sulfate of potash to strengthen stalks and enhance fruit quality.")

        if not fertilizer_advice:
            fertilizer_advice.append("NPK balance is very healthy! Maintain regular organic mulching and microbial inoculants.")

        return {
            "n_status": n_status,
            "p_status": p_status,
            "k_status": k_status,
            "ph_status": ph_status,
            "ph_remedy": ph_remedy,
            "health_score": score,
            "fertilizer_advice": fertilizer_advice
        }

    def predict(self, n, p, k, temp, humidity, ph, rainfall):
        input_data = np.array([[n, p, k, temp, humidity, ph, rainfall]])
        
        # Primary prediction
        prediction = self.model.predict(input_data)[0]
        
        # Probabilities
        proba = self.model.predict_proba(input_data)[0]
        classes = self.model.classes_
        
        # Rank top 3
        top_indices = np.argsort(proba)[::-1][:3]
        top_recommendations = []
        for idx in top_indices:
            crop_key = classes[idx]
            confidence = round(float(proba[idx]) * 100, 1)
            meta = CROP_CATALOG.get(crop_key, {})
            top_recommendations.append({
                "crop": crop_key,
                "confidence": confidence,
                "name": meta.get("name", crop_key.capitalize()),
                "category": meta.get("category", "General"),
                "icon": meta.get("icon", "🌱"),
                "duration": meta.get("duration_days", "N/A"),
                "summary": meta.get("summary", "")
            })

        primary_crop = top_recommendations[0]["crop"]
        primary_meta = CROP_CATALOG.get(primary_crop, {})
        ideal_stats = self.crop_stats.get(primary_crop, {})

        # Soil assessment
        soil_eval = self.assess_soil_health(n, p, k, ph)

        # Radar chart comparison (user value vs crop ideal mean)
        radar_metrics = {
            "labels": ["Nitrogen", "Phosphorus", "Potassium", "Temperature (°C)", "Humidity (%)", "Soil pH", "Rainfall (mm)"],
            "user_values": [n, p, k, temp, humidity, ph, rainfall],
            "crop_ideal": [
                ideal_stats.get('N', {}).get('mean', 0),
                ideal_stats.get('P', {}).get('mean', 0),
                ideal_stats.get('K', {}).get('mean', 0),
                ideal_stats.get('temperature', {}).get('mean', 0),
                ideal_stats.get('humidity', {}).get('mean', 0),
                ideal_stats.get('ph', {}).get('mean', 0),
                ideal_stats.get('rainfall', {}).get('mean', 0)
            ]
        }

        return {
            "primary": {
                "key": primary_crop,
                "name": primary_meta.get("name", primary_crop.capitalize()),
                "scientific_name": primary_meta.get("scientific_name", ""),
                "category": primary_meta.get("category", "Crop"),
                "icon": primary_meta.get("icon", "🌱"),
                "confidence": top_recommendations[0]["confidence"],
                "duration_days": primary_meta.get("duration_days", "90-120 days"),
                "sowing_season": primary_meta.get("sowing_season", "Kharif/Rabi"),
                "harvest_season": primary_meta.get("harvest_season", "Seasonal"),
                "soil_types": primary_meta.get("soil_types", ["Alluvial", "Loamy"]),
                "water_requirement": primary_meta.get("water_requirement", "Moderate"),
                "fertilizer_tips": primary_meta.get("fertilizer_tips", ""),
                "pests_diseases": primary_meta.get("pests_diseases", ""),
                "economic_value": primary_meta.get("economic_value", ""),
                "summary": primary_meta.get("summary", "")
            },
            "top_3": top_recommendations,
            "soil_health": soil_eval,
            "radar": radar_metrics,
            "inputs": {
                "N": n, "P": p, "K": k, "temperature": temp,
                "humidity": humidity, "ph": ph, "rainfall": rainfall
            }
        }
