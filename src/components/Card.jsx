import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountControlButtons from "./CountControlButtons";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountControlButtons setCount={setCount} />
    </div>
  );
}

export default Card;
