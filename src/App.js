import React from 'react';
import Controller from './Components/Controller'
import './App.css';

const App = () => (
  <main>
    <h1 className="make-box">React Circular Progress Widget</h1>
    <p>This circular progress widget takes in a value between 1 and 100.  The progress wheel then loads and counts up to the value, changing colors every 25%.  Please see the README for implementation instructions.</p>
    <Controller />
  </main>
);

export default App;
