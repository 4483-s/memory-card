import ut from "../scripts/utils.js";
import Cardbox from "./cardbox.jsx";
import { useState } from "react";
function App() {
  const [initialised, setInitialised] = useState(false);
  const [dif, setDif] = useState("easy");
  Cardbox();
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
        <Cardbox mode={dif}></Cardbox>
      </div>
    </>
  );
}

export default App;
