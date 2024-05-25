import { useState } from "react";
import "./App.css";
import { useListen, useSpeak } from "vox-sdk";
function App() {
  const { answer, answers, loading, startSpeechRecognition, stopSpeechRecognition } = useListen({
    automatedEnd: false,
  });
  console.log(answers);

  const data = useSpeak({
    onEnd: () => {
      console.log("It worked");
    },
    shouldCallOnEnd: true,
    throttleDelay: 1000,
  });
  const [text, setText] = useState("");
  // console.log(data);

  return (
    <>
      <button onClick={startSpeechRecognition}>Start</button>
      <button onClick={stopSpeechRecognition}>End</button>

      <h1>Text to Speech with Azure AI</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <button
        onClick={() => {
          data.speak(text);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          data.interruptSpeech();
        }}
      >
        Interrupt Speech
      </button>
    </>
  );
}

export default App;
