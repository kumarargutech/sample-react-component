import React from 'react';
import SampleComponent from './SampleComponent';
import EmployeeListComponent from './Components/EmployeeListComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <SampleComponent name="ReactJS"/>
      <EmployeeListComponent />
    </div>
  );
}

export default App;
