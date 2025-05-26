import { useState } from "react";
import "./App.css";
import Chap15 from "./Chap15";

function App() {
  const [chap, setChap] = useState("10");

  const handleClickChap = (e) => setChap(e.target.value);

  return (
    <div className="App">
      <div id="container">
        <div className="chap-container">
          <button
            className={`chap ${chap === "10" ? "chap-highlight" : ""}`}
            value="10"
            onClick={handleClickChap}
          >
            Chap 10
          </button>
          <button
            className={`chap ${chap === "15" ? "chap-highlight" : ""}`}
            value="15"
            onClick={handleClickChap}
          >
            Chap 15
          </button>
        </div>
        {chap === "15" && <Chap15 />}
      </div>
    </div>
  );
}

export default App;
