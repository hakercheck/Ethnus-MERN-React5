import React, {useState} from 'react';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (selectedDate) {
      const dob = new Date(selectedDate);
      const today = new Date();
      const ageInMilliseconds = today - dob;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      setAge(ageInYears);
    }
  };
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;
