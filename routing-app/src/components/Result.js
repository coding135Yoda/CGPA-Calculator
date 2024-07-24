import React from 'react';
import gradePoints from '../data/gradepoints';
import credits from '../data/credits';

const Result = ({ marks, department, semester }) => {
  const calculateSGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    const subjects = credits[department][semester - 1];

    for (const subject in marks) {
      const grade = marks[subject];
      const points = gradePoints[grade];
      const credit = subjects[subject];

      totalPoints += points * credit;
      totalCredits += credit;
    }

    return (totalPoints / totalCredits).toFixed(2);
  };

  const sgpa = calculateSGPA();

  return (
    <div>
      <h2>Your SGPA is: {sgpa}</h2>
    </div>
  );
};

export default Result;
