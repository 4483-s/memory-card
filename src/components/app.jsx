import ut from "../scripts/utils.js";
import Cardbox from "./cardbox.jsx";
import { useState } from "react";
import dummy from "../scripts/dummy.json";
console.log(dummy);
function App() {
  const easyCount = 15;
  const mediumCount = 20;
  const hardCount = 40;
  const [initialised, setInitialised] = useState(false);
  const [dif, setDif] = useState("easy");
  const [currentRecord, setCurrentRecord] = useState(new Set());
  function handleImgClick(url) {
    const newSet = new Set(currentRecord);
    if (newSet.has(url)) newSet.clear();
    else newSet.add(url);

    setCurrentRecord(newSet);
  }
  function handleDifChange(dif) {
    setCurrentRecord(new Set());
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
      <div className="top">
        <div>
          <button onClick={() => handleDifChange("hard")}>Hard</button>
          <button onClick={() => handleDifChange("medium")}>Medium</button>
          <button onClick={() => handleDifChange("easy")}>Easy</button>
        </div>
      </div>
      <div className="bottom">
        <Cardbox list={dummy} handleImgClick={handleImgClick}></Cardbox>
      </div>
    </>
  );
}

export default App;
