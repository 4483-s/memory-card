import ut from "../js/utils.js";
import Init from "./init.jsx";
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

  if (initialised) return <Init></Init>;
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
