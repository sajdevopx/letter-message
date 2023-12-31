import './App.css';
import React, { useState } from 'react';
import Warning from './Message/Warning';

function App() {
  const [warning, setWarning] = useState(false);

  const showWarningHandler = () => {
    setWarning(!warning);
  };

  return (
    <div className="App">
      {warning && <Warning onConfirm={showWarningHandler} />}
      <p className="desc">Hi elli, please tap the letter...</p>
      <div className="heart" onClick={showWarningHandler}>
        ✉️
      </div>
    </div>
  );
}

export default App;
