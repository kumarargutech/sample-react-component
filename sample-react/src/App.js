import React from 'react';
import SampleComponent from './SampleComponent';
//import EmployeeListComponent from './Components/EmployeeListComponent';
import UseStateComponent from './Components/UseStateComponent';
import UseReducerComponent from './Components/UseReducerComponent';
import CallBacksDownComponent from './Components/CallBacksDownComponent';
import AvoidCallBacksDownComponent from './Components/AvoidCallBacksDownComponent';
import LifeCycleComponent from './Components/LifeCycleComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <SampleComponent name="ReactJS"/>
      <UseStateComponent initialValue={0}/>
      <UseReducerComponent initialValue={0} />
      <CallBacksDownComponent initialValue={0} />
      <AvoidCallBacksDownComponent initialValue={0} />
      <LifeCycleComponent bkgroundColor="yellow"/>
    </div>
  );
}

export default App;
