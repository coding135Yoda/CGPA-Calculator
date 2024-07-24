import React, { useState } from 'react';
import Home from './components/Home';
import SubjectForm from './components/SubjectForm';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ department: '', semester: 0 });
  const [marks, setMarks] = useState({});

  return (
    <div className="App">
      {step === 1 && <Home setStep={setStep} setDetails={setDetails} />}
      {step === 2 && (
        <SubjectForm
          department={details.department}
          semester={details.semester}
          setStep={setStep}
          setMarks={setMarks}
        />
      )}
      {step === 3 && <Result marks={marks} department={details.department} semester={details.semester} />}
    </div>
  );
}

export default App;
