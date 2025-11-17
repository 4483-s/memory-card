import ut from "../scripts/utils.js";
import { useState } from "react";

// import Card from "./card.jsx";
export default function Cardbox({ list, reportState }) {
  const [record, setRecord] = useState(new Set());
  function handleClick(url) {
    const newSet = new Set(record);
    if (newSet.has(url)) newSet.clear();
    else newSet.add(url);

    setRecord(newSet);
  }
  reportState(Array.from(record).length);
  return (
    <div>
      {ut.randomiseArray(list).map((v) => {
        return (
          <div className="card" onClick={() => handleClick(v.url)}>
            <img src={v.url} alt={v.name} />
            <p>{v.name}</p>
          </div>
        );
      })}
    </div>
  );
}
