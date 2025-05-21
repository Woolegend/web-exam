import { useState } from "react";
import "./style.css";

const JUSTIFY_CONTENT = {
  "flex-start": "justify-start",
  center: "justify-center",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
};

export default function JustifyContent() {
  const [selected, setSeleted] = useState("flex-start");

  const handleClickButton = (event) => setSeleted(event.target.value);

  return (
    <div className="wrapper">
      <h2>justify-content : {selected}</h2>
      <div className={`flex-container ${JUSTIFY_CONTENT[selected]}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex-item" />
        ))}
      </div>
      <div className="button-list">
        {Object.keys(JUSTIFY_CONTENT).map((key) => (
          <button key={key} value={key} onClick={handleClickButton}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
