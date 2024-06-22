import React, { useState, useEffect } from "react";
import TechnologySection from "./sections/TechnologySection";
import HealthSection from "./sections/HealthSection";
import EducationSection from "./sections/EducationSection";
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";
import axios from "axios";

// const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const Form = ({ onSubmit }) => {
  const initialState = {
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
    additionalQuestions: [],
  };

  const { formData, handleChange, resetForm } = useForm(initialState);
  const { errors, validateField, validateForm } = useValidation(formData);

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.surveyTopic) {
      axios
        .get(`/api/${formData.surveyTopic}`)
        .then((response) => setAdditionalQuestions(response.data))
        .catch((error) => console.error(error));
    }
  }, [formData.surveyTopic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData, additionalQuestions);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => validateField("fullName")}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => validateField("email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="surveyTopic">Survey Topic</label>
        <select
          id="surveyTopic"
          name="surveyTopic"
          value={formData.surveyTopic}
          onChange={handleChange}
          onBlur={() => validateField("surveyTopic")}
        >
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && (
          <span className="error">{errors.surveyTopic}</span>
        )}
      </div>

      {formData.surveyTopic === "Technology" && (
        <TechnologySection
          formData={formData}
          handleChange={handleChange}
          validateField={validateField}
          errors={errors}
        />
      )}
      {formData.surveyTopic === "Health" && (
        <HealthSection
          formData={formData}
          handleChange={handleChange}
          validateField={validateField}
          errors={errors}
        />
      )}
      {formData.surveyTopic === "Education" && (
        <EducationSection
          formData={formData}
          handleChange={handleChange}
          validateField={validateField}
          errors={errors}
        />
      )}

      {additionalQuestions.map((question, index) => (
        <div key={index} className="form-field">
          <label htmlFor={`additionalQuestion${index}`}>{question.label}</label>
          <input
            type={question.type}
            id={`additionalQuestion${index}`}
            name={`additionalQuestion${index}`}
            value={formData[`additionalQuestion${index}`]}
            onChange={handleChange}
            onBlur={() => validateField(`additionalQuestion${index}`)}
          />
          {errors[`additionalQuestion${index}`] && (
            <span className="error">
              {errors[`additionalQuestion${index}`]}
            </span>
          )}
        </div>
      ))}

      <div className="form-field">
        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          onBlur={() => validateField("feedback")}
        />
        {errors.feedback && <span className="error">{errors.feedback}</span>}
      </div>

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Form;
