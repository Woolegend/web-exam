import { useState } from "react";
import AlignItems from "./AlignItems";
import "./App.css";
import JustifyContent from "./JustifyContent";
import Position from "./Position";
import Selector from "./Selecter";
import Visibility from "./Visibility";

function App() {
  const [direction, setDirection] = useState("row");

  const handleClickDirection = (e) => setDirection(e.target.value);

  return (
    <div className="App">
      <div id="container">
        <Selector />
        <Position />
        <Visibility />
        <div className="wrapper">
          <h2>flex-direction : {direction}</h2>
          <div className="button-list">
            <button value="row" onClick={handleClickDirection}>
              row
            </button>
            <button value="column" onClick={handleClickDirection}>
              column
            </button>
          </div>
        </div>
        <JustifyContent direction={direction} />
        <AlignItems direction={direction} />
      </div>
    </div>
  );
}

export default App;
