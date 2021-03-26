import React from 'react';
<<<<<<< HEAD:src/screens/App.js
import logo from '../assets/logo.svg';
import '../screens/App.css';
=======
import logo from './logo.svg';
import './App.css';
import Swipe from './screens/Swipe'
>>>>>>> feature_MarmitonAPI:src/App.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Swipe/>
    </div>
  );
}

export default App;
