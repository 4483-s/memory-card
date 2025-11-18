import ut from "../scripts/utils.js";
import loadingImg from "../assest/loading.svg";
// import { useState } from "react";

// import Card from "./card.jsx";
export default function Cardbox({ list, handleImgClick }) {
  // console.log(list[0]);
  if (!list) {
    return <img src={loadingImg} alt="loading" />;
  }
  return (
    <div className="cardbox">
      {ut.randomiseArray(list).map((v) => {
        return (
          <div
            className="card"
            onClick={() => handleImgClick(v.url)}
            key={v.url}
          >
            <img src={v.url} alt={v.name} />
            <p>{v.name}</p>
          </div>
        );
      })}
    </div>
  );
}
