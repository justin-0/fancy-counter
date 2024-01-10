import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtonsContainer from "./CountButtonsContainer";
import CountButton from "./CountButton";
import { useState, useEffect } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count > 4;
  const handlePlus = () => setCount((c) => c + 1);
  const handleMinus = () => setCount((c) => (c > 0 ? c - 1 : 0));
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
      <CountButtonsContainer>
        <CountButton setCount={handleMinus} locked={locked}>
          <MinusIcon className="count-btn-icon" />
        </CountButton>
        <CountButton setCount={handlePlus} locked={locked}>
          <PlusIcon className="count-btn-icon" />
        </CountButton>
      </CountButtonsContainer>
    </div>
  );
}

export default Card;
