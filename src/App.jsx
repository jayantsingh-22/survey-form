import React, { useState } from "react";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const handleFormSubmit = (data, questions) => {
    setFormData(data);
    setAdditionalQuestions(questions);
  };

  return (
    <div className="App">
      <h1>Survey Form</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && (
        <Summary
          formData={formData}
          additionalQuestions={additionalQuestions}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
