import React, { useState } from 'react';

const departments = ['CS', 'AI', 'AIDS', 'IT', 'ECE', 'ME', 'CE', 'EE'];
const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = ({ setStep, setDetails }) => {
  const [department, setDepartment] = useState(departments[0]);
  const [semester, setSemester] = useState(semesters[0]);

  const handleSubmit = () => {
    setDetails({ department, semester });
    setStep(2);
  };

  return (
    <div>
      <h1>Result Calculator</h1>
      <div>
        <label>Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Semester:</label>
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem} Semester
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;
