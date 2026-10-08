import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    setMessage('Connecting to Stellar...');
    // TODO: Implement actual Stellar contract interaction
    setMessage('Hello from Stellar Production Template!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stellar Production Template</h1>
        <button onClick={handleClick}>
          Say Hello
        </button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
