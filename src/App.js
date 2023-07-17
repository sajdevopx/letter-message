import './App.css';
import React, { useState } from 'react';
import Warning from './Message/Warning';
import ReactAudioPlayer from 'react-audio-player';
import ordinary from './assets/song.mp3';

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
      <ReactAudioPlayer
        src={ordinary}
        autoPlay={true}
        loop={true}
        controls
      ></ReactAudioPlayer>
    </div>
  );
}

export default App;
