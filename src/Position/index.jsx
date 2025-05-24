import { useState } from "react";
import "./style.css";

export default function Position() {
  const positions = ["static", "absolute", "relative", "fixed", "sticky"];
  const [style, setStyle] = useState("static");

  const handleClickStyle = (e) => setStyle(e.target.value);

  return (
    <div className="wrapper">
      <h2>position : {style}</h2>
      <div className="main-container">
        <div className="box" />
        <div className={`box ${style}`} />
        <div className="box" />
        <div className="box" />
      </div>
      <div className="button-list">
        {positions.map((e) => (
          <button key={e} value={e} onClick={handleClickStyle}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}
