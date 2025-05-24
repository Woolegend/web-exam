import AlignItems from "./AlignItems";
import "./App.css";
import JustifyContent from "./JustifyContent";
import Position from "./Position";
import Selector from "./Selecter";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Position />
        <Selector />
        <JustifyContent />
        <AlignItems />
      </div>
    </div>
  );
}

export default App;
