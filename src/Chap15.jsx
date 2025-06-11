import JustifyContent from "./JustifyContent";
import Position from "./Position";
import Selector from "./Selecter";
import AlignItems from "./AlignItems";
import { useState } from "react";
import StyledComponent from "./StyledComponents/Button";

export default function Chap15() {
  const [direction, setDirection] = useState("row");

  const handleClickDirection = (e) => setDirection(e.target.value);

  return (
    <>
      <Selector />
      <Position />
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
      <StyledComponent />
    </>
  );
}
