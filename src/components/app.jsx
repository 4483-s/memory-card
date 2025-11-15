import ut from "../js/utils.js";
import { useState } from "react";
function App() {
  const [initialised, setInitialised] = useState(false);
  const [dif, setDif] = useState("easy");
  function handleDif(dif) {
    setDif(dif);
  }
  function handleInit(dif) {
    setInitialised(true);
    setDif(dif);
  }
  if (!initialised)
    return (
      <div>
        <h1>Select a difficulty</h1>
        <button onClick={() => handleInit("hard")}>Hard</button>
        <button onClick={() => handleInit("medium")}>Medium</button>
        <button onClick={() => handleInit("easy")}>Easy</button>
      </div>
    );
  return (
    <>
      <div className="top"></div>
      <div className="bottom">
        <div className="cardbox"></div>
      </div>
    </>
  );
}

export default App;
