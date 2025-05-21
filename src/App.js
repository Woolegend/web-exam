import { useState } from "react";
import "./App.css";

function App() {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  const handleJustifyContentChange = (event) => {
    setJustifyContent(event.target.value);
  };

  return (
    <div className="App">
      <div id="container">
        <div className="wrapper">
          <h2>justify-content : {justifyContent}</h2>
          <div className={`flex-container ${justifyContent}`}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex-item" />
            ))}
          </div>
          <div className="button-list" onClick={handleJustifyContentChange}>
            <button value="justify-start">flex-start</button>
            <button value="justify-center">center</button>
            <button value="justify-end">flex-end</button>
            <button value="justify-between">space-between</button>
            <button value="justify-around">space-around</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
