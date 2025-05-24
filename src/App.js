import AlignItems from "./AlignItems";
import "./App.css";
import JustifyContent from "./JustifyContent";
import Selector from "./Selecter";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Selector />
        <JustifyContent />
        <AlignItems />
      </div>
    </div>
  );
}

export default App;
