import Cardbox from "./cardbox.jsx";
import { useState, useRef } from "react";
import dummy from "../scripts/dummy.json";
import utils from "../scripts/utils.js";
console.log(dummy);
function App() {
  const [dif, setDif] = useState("easy");
  const [currentRecord, setCurrentRecord] = useState(new Set());
  const [currentList, setCurrentList] = useState(null);
  const lists = useRef(null);
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
  // used only once
  const [initialised, setInitialised] = useState(false);
  function handleInit(dif) {
    setInitialised(true);
    setDif(dif);
  }
  console.log(lists.current);
  if (!initialised) {
    return (
      <div>
        <h1>Select a difficulty</h1>
        <button onClick={() => handleInit("hard")}>Hard</button>
        <button onClick={() => handleInit("medium")}>Medium</button>
        <button onClick={() => handleInit("easy")}>Easy</button>
      </div>
    );
  }
  //
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
