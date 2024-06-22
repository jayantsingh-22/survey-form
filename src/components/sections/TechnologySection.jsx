import React from "react";

const TechnologySection = ({
  formData,
  handleChange,
  validateField,
  errors,
}) => (
  <div>
    <div className="form-field">
      <label>Favorite Programming Language</label>
      <select
        name="favoriteProgrammingLanguage"
        value={formData.favoriteProgrammingLanguage}
        onChange={handleChange}
        onBlur={() => validateField("favoriteProgrammingLanguage")}
      >
        <option value="">Select a language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
      </select>
      {errors.favoriteProgrammingLanguage && (
        <span className="error">{errors.favoriteProgrammingLanguage}</span>
      )}
    </div>

    <div className="form-field">
      <label>Years of Experience</label>
      <input
        type="number"
        name="yearsOfExperience"
        value={formData.yearsOfExperience}
        onChange={handleChange}
        onBlur={() => validateField("yearsOfExperience")}
      />
      {errors.yearsOfExperience && (
        <span className="error">{errors.yearsOfExperience}</span>
      )}
    </div>
  </div>
);

export default TechnologySection;
