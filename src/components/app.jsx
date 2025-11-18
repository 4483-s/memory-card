import Cardbox from "./cardbox.jsx";
import { useState } from "react";
import dummy from "../scripts/dummy.json";
import utils from "../scripts/utils.js";
console.log(dummy);
function App() {
  const [dif, setDif] = useState("easy");
  const [currentRecord, setCurrentRecord] = useState(new Set());
  // const [currentList, setCurrentList] = useState(null);
  const [lists, setLists] = useState(null);
  // TODO
  // get one list at a time to fix performance issue
  if (!lists) utils.getLists().then((v) => setLists(v));

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
  //
  //
  //
  //
  //
  const [initialised, setInitialised] = useState(false);
  function handleInit(dif) {
    setInitialised(true);
    setDif(dif);
  }
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
  //
  //
  //
  return (
    <>
      <div className="top">
        <h1 className="title">Title</h1>
        <div className="buttons">
          <button onClick={() => handleDifChange("hard")}>
            <h3>Hard</h3>
            <p>best:</p>
          </button>
          <button onClick={() => handleDifChange("medium")}>
            <h3>Medium</h3>
            <p>best:</p>
          </button>
          <button onClick={() => handleDifChange("easy")}>
            <h3>Easy</h3>
            <p>best:</p>
          </button>
        </div>
      </div>
      <div className="bottom">
        <Cardbox
          list={!lists ? null : lists[dif]}
          handleImgClick={handleImgClick}
        ></Cardbox>
      </div>
    </>
  );
}

export default App;
