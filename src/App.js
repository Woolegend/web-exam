import AlignItems from "./AlignItems";
import "./App.css";
import JustifyContent from "./JustifyContent";
import Position from "./Position";
import Selector from "./Selecter";
import Visibility from "./Visibility";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Selector />
        <Position />
        <Visibility />
        <JustifyContent />
        <AlignItems />
      </div>
    </div>
  );
}

export default App;
