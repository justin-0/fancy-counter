import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtonsContainer from "./CountButtonsContainer";
import { useState, useEffect } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count > 4;
  const handleSpacebar = (event) => {
    if (event.key === " " && count !== 5) {
      setCount((c) => c + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSpacebar);

    return () => document.removeEventListener("keydown", handleSpacebar);
  }, [count]);

  return (
    <div className={`card ${locked && "card--limit"}`}>
      <Title count={count} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtonsContainer setCount={setCount} locked={locked} />
    </div>
  );
}

export default Card;
