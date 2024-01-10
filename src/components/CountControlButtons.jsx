import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountControlButtons() {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}

export default CountControlButtons;
