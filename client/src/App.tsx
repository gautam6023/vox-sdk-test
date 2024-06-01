import { useState } from "react";
import "./App.css";
import { useListen, useSpeak, useAppContext } from "vox-sdk";
function App() {
  const [text, setText] = useState("");
  const { answer, answers, loading, startSpeechRecognition, stopSpeechRecognition } = useListen({
    onEndOfSpeech: () => {
      setText(answers.join(""));
    },
  });
  console.log(answers);

  const data = useSpeak({
    onEnd: () => {
      console.log("It worked");
    },
    shouldCallOnEnd: true,
    throttleDelay: 1000,
    voice: "",
  });

  // console.log(data);

  return (
    <>
      <button disabled={loading} onClick={startSpeechRecognition}>
        Start
      </button>
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
