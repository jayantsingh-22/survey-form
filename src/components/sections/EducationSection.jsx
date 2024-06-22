import React from "react";

const EducationSection = ({
  formData,
  handleChange,
  validateField,
  errors,
}) => (
  <div>
    <div className="form-field">
      <label>Highest Qualification</label>
      <select
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
        onBlur={() => validateField("highestQualification")}
      >
        <option value="">Select qualification</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>
      {errors.highestQualification && (
        <span className="error">{errors.highestQualification}</span>
      )}
    </div>

    <div className="form-field">
      <label>Field of Study</label>
      <input
        type="text"
        name="fieldOfStudy"
        value={formData.fieldOfStudy}
        onChange={handleChange}
        onBlur={() => validateField("fieldOfStudy")}
      />
      {errors.fieldOfStudy && (
        <span className="error">{errors.fieldOfStudy}</span>
      )}
    </div>
  </div>
);

export default EducationSection;
