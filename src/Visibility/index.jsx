import { useState } from "react";
import "./style.css";

export default function Visibility() {
  const positions = ["visible", "hidden"];
  const [style, setStyle] = useState("visible");

  const handleClickStyle = (e) => setStyle(e.target.value);

  return (
    <div className="wrapper">
      <h2>Visibility : {style}</h2>
      <div className="visibility-container">
        <div className="box" />
        <div className="box" style={{ visibility: style }} />
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
