import { useState } from "react";
import "./style.css";

export default function Selector() {
  const [style, setStyle] = useState({ id: false, class: false });

  const handleClickStyle = (e) =>
    setStyle((prev) => {
      const { value } = e.target;
      return { ...prev, [value]: !style[value] };
    });

  return (
    <div className="wrapper">
      <h2>selector</h2>
      <ul className="selector-container">
        <li id={style.id ? "id" : ""} className={style.class ? "class" : ""}>
          <span>li class id</span>
        </li>
        <li className={style.class ? "class" : ""}>
          <span>li class</span>
        </li>
        <li>
          <span>li</span>
        </li>
      </ul>
      <div className="button-list">
        {Object.keys(style).map((key) => (
          <button
            key={key}
            value={key}
            style={{
              backgroundColor: style[key] ? "green" : "white",
              color: style[key] ? "white" : "black",
            }}
            onClick={handleClickStyle}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
