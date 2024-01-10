import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtonsContainer from "./CountButtonsContainer";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count > 4;

  return (
    <div className={`card ${locked && "card--limit"}`}>
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtonsContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
