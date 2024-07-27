import React, { useState } from 'react';
import credits from '../data/credits';

const SubjectForm = ({ department, semester, setStep, setMarks }) => {
  const subjects = credits[department][semester - 1];
  const [localMarks, setLocalMarks] = useState({});

  const handleChange = (e, subject) => {
    setLocalMarks({ ...localMarks, [subject]: e.target.value });
  };

  const handleSubmit = () => {
    setMarks(localMarks);
    setStep(3);
  };

  return (
    <div className="container">
      <h2>Enter Marks for {department} - Semester {semester}</h2>
      {Object.keys(subjects).map((subject) => (
        <div key={subject}>
          <label>{subject}:</label>
          <input type="text" onChange={(e) => handleChange(e, subject)} />
        </div>
      ))}
      <button onClick={handleSubmit}>Calculate SGPA</button>
    </div>
  );
};

export default SubjectForm;
