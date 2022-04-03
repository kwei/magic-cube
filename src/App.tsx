import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cube from './components/Cube';
import RubikCube from './components/RubikCube';

function App() {
  return (
    <div className="App">
     <RubikCube></RubikCube>
    </div>
  );
}

export default App;
