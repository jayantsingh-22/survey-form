import React from "react";

const HealthSection = ({ formData, handleChange, validateField, errors }) => (
  <div>
    <div className="form-field">
      <label>Exercise Frequency</label>
      <select
        name="exerciseFrequency"
        value={formData.exerciseFrequency}
        onChange={handleChange}
        onBlur={() => validateField("exerciseFrequency")}
      >
        <option value="">Select frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Rarely">Rarely</option>
      </select>
      {errors.exerciseFrequency && (
        <span className="error">{errors.exerciseFrequency}</span>
      )}
    </div>

    <div className="form-field">
      <label>Diet Preference</label>
      <select
        name="dietPreference"
        value={formData.dietPreference}
        onChange={handleChange}
        onBlur={() => validateField("dietPreference")}
      >
        <option value="">Select diet</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>
      {errors.dietPreference && (
        <span className="error">{errors.dietPreference}</span>
      )}
    </div>
  </div>
);

export default HealthSection;
