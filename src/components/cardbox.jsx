import ut from "../scripts/utils.js";
import { useState } from "react";
// import Card from "./card.jsx";
export default function Cardbox({ list }) {
  const [score, setScore] = useState(0);
  const record = new Set();
  function handleClick(e) {
    record.add(e.target.src);
  }
  return (
    <div>
      {list.map((v) => {
        <Card url={v.url} alt={v.name} onClick={handleClick}></Card>;
      })}
    </div>
  );
}
function Card({ url, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}
