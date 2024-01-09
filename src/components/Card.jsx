import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountControlButtons from "./CountControlButtons";

function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountControlButtons />
    </div>
  );
}

export default Card;
