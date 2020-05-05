import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState("");

  useEffect(() => {

    async function fetchMyApi() {
      const { data: { msg } } = await axios.get('http://localhost:3000');
      setState(msg);
    }
    
    fetchMyApi();
  })

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
          {state}
        </a>
      </header>
    </div>
  );
}

export default App;
