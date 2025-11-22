import Cardbox from "./cardbox.jsx";
import { useState, useRef } from "react";
import dummy from "../scripts/dummy.json";
import utils from "../scripts/utils.js";
console.log(dummy);
function App() {
  const [dif, setDif] = useState("easy");
  const [currentRecord, setCurrentRecord] = useState(new Set());
  const [, forceRender] = useState(0);
  const li = useRef({});

  const rerender = () => forceRender((x) => x + 1);

  if (!li.current.easy) {
    utils.fetchItems(1, 12).then(promiseHandler);
  }
  if (!li.current.medium) {
    utils.fetchItems(100, 20).then(promiseHandler);
  }
  if (!li.current.hard) {
    utils.fetchItems(300, 40).then(promiseHandler);
  }
  function promiseHandler(v) {
    let difToSet =
      v.length === 12 ? "easy" : v.length === 20 ? "medium" : "hard";
    li.current[difToSet] = v;
    if (difToSet === dif) rerender();
  }

  function handleImgClick(url) {
    const newSet = new Set(currentRecord);
    if (newSet.has(url)) newSet.clear();
    else newSet.add(url);

    setCurrentRecord(newSet);
  }
  function handleDifChange(difarg) {
    if (difarg === dif) return;
    setCurrentRecord(new Set());
    setDif(difarg);
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
          list={li.current[dif]}
          handleImgClick={handleImgClick}
        ></Cardbox>
      </div>
    </>
  );
}

export default App;
