import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useListen } from "vox-sdk";
function App() {
  const {
    answer,
    answers,
    loading,
    recognizerRef,
    startSpeechRecognition,
    stopSpeechRecognition,
  } = useListen({});

  return (
    <>
      <button onClick={startSpeechRecognition}>Start</button>
      <button onClick={stopSpeechRecognition}>End</button>
    </>
  );
}

export default App;
