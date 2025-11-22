import Cardbox from "./cardbox.jsx";
import { useState, useRef } from "react";
import dummy from "../scripts/dummy.json";
import utils from "../scripts/utils.js";
console.log(dummy);
function App() {
  const easyN = 3;
  const mediumN = 4;
  const hardN = 5;
  const [dif, setDif] = useState("easy");
  const [record, setRecord] = useState({ easy: 0, medium: 0, hard: 0 });
  const [currentRecord, setCurrentRecord] = useState(new Set());

  const [, forceRender] = useState(0);
  const li = useRef({});

  const rerender = () => forceRender((x) => x + 1);

  if (!li.current.easy) {
    utils.fetchItems(1, easyN).then(promiseHandler);
  }
  if (!li.current.medium) {
    utils.fetchItems(100, mediumN).then(promiseHandler);
  }
  if (!li.current.hard) {
    utils.fetchItems(300, hardN).then(promiseHandler);
  }
  function promiseHandler(v) {
    let difToSet =
      v.length === easyN ? "easy" : v.length === mediumN ? "medium" : "hard";
    li.current[difToSet] = v;
    if (difToSet === dif) rerender();
  }

  function handleImgClick(url) {
    if (currentRecord.has(url)) {
      setCurrentRecord(new Set());
      return;
    }
    const newSet = new Set(currentRecord);
    newSet.add(url);
    if (newSet.size === li.current[dif].length) {
      setCurrentRecord(new Set());
    } else {
      setCurrentRecord(newSet);
    }

    if (newSet.size >= record[dif])
      setRecord({ ...record, [dif]: newSet.size });
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
        <h1 className="title">
          Title:{currentRecord.size}/
          {dif === "easy" ? easyN : dif === "medium" ? mediumN : hardN}
        </h1>
        <div className="buttons">
          <button onClick={() => handleDifChange("hard")}>
            <h3>Hard</h3>
            <p>best:{`${record.hard}/${hardN}`}</p>
          </button>
          <button onClick={() => handleDifChange("medium")}>
            <h3>Medium</h3>
            <p>best:{`${record.medium}/${mediumN}`}</p>
          </button>
          <button onClick={() => handleDifChange("easy")}>
            <h3>Easy</h3>
            <p>best:{`${record.easy}/${easyN}`}</p>
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
