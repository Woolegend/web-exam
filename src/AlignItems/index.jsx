import { useState } from "react";
import "./style.css";

const AlIGN_ITEMS = {
  "flex-start": "align-start",
  center: "align-center",
  "flex-end": "align-end",
};

export default function AlignItems() {
  const [selected, setSeleted] = useState("align-start");

  const handleClickButton = (event) => setSeleted(event.target.value);

  return (
    <div className="wrapper">
      <h2>align-items : {selected}</h2>
      <div className={`align-container ${AlIGN_ITEMS[selected]}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex-item" />
        ))}
      </div>
      <div className="button-list">
        {Object.keys(AlIGN_ITEMS).map((key) => (
          <button key={key} value={key} onClick={handleClickButton}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
