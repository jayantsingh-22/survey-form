import { useState } from "react";

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validateField = (name) => {
    let error = "";
    if (!formData[name]) {
      error = "This field is required";
    } else {
      switch (name) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData[name])) {
            error = "Invalid email format";
          }
          break;
        case "yearsOfExperience":
          if (formData[name] <= 0) {
            error = "Must be greater than 0";
          }
          break;
        case "favoriteProgrammingLanguage":
        case "exerciseFrequency":
        case "dietPreference":
        case "highestQualification":
        case "fieldOfStudy":
          if (!formData[name]) {
            error = "This field is required";
          }
          break;
        default:
          break;
      }
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    const fieldNames = Object.keys(formData);
    fieldNames.forEach((name) => validateField(name));
    return fieldNames.every((name) => !errors[name]);
  };

  return {
    errors,
    validateField,
    validateForm,
  };
};

export default useValidation;
