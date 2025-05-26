import { useState } from "react";
import "./App.css";
import Chap15 from "./Chap15";
import Chap10 from "./Chap10";

function App() {
  const [chap, setChap] = useState("10");

  return (
    <div className="App">
      <div id="container">
        <div className="chap-container">
          {["10", "15"].map((e) => (
            <button
              className={`chap ${chap === e ? "chap-highlight" : ""}`}
              onClick={() => {
                setChap(e);
              }}
              children={"chap" + e}
            />
          ))}
        </div>
        {chap === "10" && <Chap10 />}
        {chap === "15" && <Chap15 />}
      </div>
    </div>
  );
}

export default App;
