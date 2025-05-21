import { useState } from "react";
import "./App.css";

const JUSTIFY_CONTENT = {
  start: {
    text: "flex-start",
    name: "justify-start",
  },
  center: {
    text: "center",
    name: "justify-center",
  },
  end: {
    text: "flex-end",
    name: "justify-end",
  },
  between: {
    text: "space-between",
    name: "justify-between",
  },
  around: {
    text: "space-around",
    name: "justify-around",
  },
};

function App() {
  const [JC_KEY, setJC_KEY] = useState("start");

  const handleClickJC = (event) => {
    setJC_KEY(event.target.value);
  };

  return (
    <div className="App">
      <div id="container">
        <div className="wrapper">
          <h2>justify-content : {JUSTIFY_CONTENT[JC_KEY].text}</h2>
          <div className={`flex-container ${JUSTIFY_CONTENT[JC_KEY].name}`}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex-item" />
            ))}
          </div>
          <div className="button-list">
            {Object.keys(JUSTIFY_CONTENT).map((key) => (
              <button key={key} value={key} onClick={handleClickJC}>
                {JUSTIFY_CONTENT[key].text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
