import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtonsContainer from "./CountButtonsContainer";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtonsContainer setCount={setCount} />
    </div>
  );
}

export default Card;
